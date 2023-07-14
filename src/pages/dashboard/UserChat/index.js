import React, { useState, useEffect, useRef } from 'react';
import { DropdownMenu, DropdownItem, DropdownToggle, UncontrolledDropdown, Modal, ModalHeader, ModalBody, CardBody, Button, ModalFooter } from "reactstrap";
import { connect } from "react-redux";

import SimpleBar from "simplebar-react";

import withRouter from "../../../components/withRouter";

//Import Components
import UserProfileSidebar from "../../../components/UserProfileSidebar";
import SelectContact from "../../../components/SelectContact";
import UserHead from "./UserHead";
import ImageList from "./ImageList";
import ChatInput from "./ChatInput";
import FileList from "./FileList";

//actions
import { openUserSidebar, setFullUser } from "../../../redux/actions";

//Import Images
import avatar4 from "../../../assets/images/users/avatar-4.jpg";
import avatar1 from "../../../assets/images/users/avatar-1.jpg";

//i18n
import { useTranslation } from 'react-i18next';

function UserChat(props) {

    const chatContainerRef = useRef();

    const [modal, setModal] = useState(false);

    /* intilize t variable for multi language implementation */
    const { t } = useTranslation();

    //demo conversation messages
    //userType must be required
    //const [allUsers] = useState(props.recentChatList);
    const [chatMessages, setchatMessages] = useState(props.recentChatList[props.active_user].messages);
    const [initializedUsers, setInitializedUsers] = useState([]);


    useEffect(() => {
        if (props.user != null) {
            props.recentChatList.forEach(user => {
                if (user.id === props.user.id) {
                    user.initialconv = props.user?.initialconv ?? false;
                    user.messages = props.user?.messages ?? [];
                }
            });
            setchatMessages(props.recentChatList[props.active_user].messages);
            setInitializedUsers(prevUsers => [...prevUsers, props.user]);
        }
        else {
            setchatMessages(props.recentChatList[props.active_user].messages);
        }

        // chatContainerRef.current.recalculate();
        // if (chatContainerRef.current.el) {
        //     chatContainerRef.current.getScrollElement().scrollTop = chatContainerRef.current.getScrollElement().scrollHeight;
        // }

        scrolltoBottom();
    }, [props.active_user, props.recentChatList, props.user]);

    useEffect(() => {
        if (initializedUsers.find(x => x.id === props.recentChatList[props.active_user].id) == null) {
            getInitialIceBreaker();
        }
    }, [props.active_user]);


    const toggle = () => setModal(!modal);

    const getInitialIceBreaker = () => {
        let userData = { ...props.recentChatList[props.active_user]};

        let messageObj = {
            'id': Math.floor(20 + Math.random() * (100000 - 1)), 'time':new Date(),'isImageMessage': false, 'isFileMessage': false, 'role': 'assistant', 'content': '', 'isTyping': true
        }

        setchatMessages([...chatMessages, messageObj]);

        userData.messages = [messageObj];
        userData.isTyping = false;
        props.setFullUser(userData);
        scrolltoBottom("initial message");
    }


    const addMessage = (message, type) => {
        var messageObj = null;

        let d = new Date();
        var n = d.getSeconds();

        //matches the message type is text, file or image, and create object according to it
        switch (type) {
            case "textMessage":
                messageObj = {
                    id: chatMessages.length + 1,
                    content: message,
                    time: d,
                    userType: "user",
                    image: avatar4,
                    isFileMessage: false,
                    isImageMessage: false,
                    role: "user",
                    isTyping: false
                }
                break;

            case "fileMessage":
                messageObj = {
                    id: chatMessages.length + 1,
                    message: 'file',
                    fileMessage: message.name,
                    size: message.size,
                    time: "00:" + n,
                    userType: "user",
                    image: avatar4,
                    isFileMessage: true,
                    isImageMessage: false,
                    role: "user",
                    isTyping: false
                }
                break;

            case "imageMessage":
                var imageMessage = [
                    { image: message },
                ]

                messageObj = {
                    id: chatMessages.length + 1,
                    message: 'image',
                    imageMessage: imageMessage,
                    size: message.size,
                    time: "00:" + n,
                    userType: "user",
                    image: avatar4,
                    isImageMessage: true,
                    isFileMessage: false,
                    role: "user",
                    isTyping: false
                }
                break;

            default:
                break;
        }

        //add message object to chat        
        setchatMessages([...chatMessages, messageObj]);
        let assistantMessageObj = {
            'id': Math.floor(20 + Math.random() * (100000 - 1)), 'time':new Date(),'isImageMessage': false, 'isFileMessage': false, 'role': 'assistant', 'content': '', 'isTyping': true
        }
        setchatMessages([...chatMessages, assistantMessageObj]);

        props.recentChatList[props.active_user].isTyping = true;

        let copyallUsers = props.recentChatList[props.active_user];
        


        copyallUsers.messages = [...chatMessages, messageObj, assistantMessageObj];
        copyallUsers.isTyping = false;
        props.setFullUser(copyallUsers);

        // chatContainerRef.current.recalculate();
        // if (chatContainerRef.current.el) {
        //     chatContainerRef.current.getScrollElement().scrollTop = chatContainerRef.current.getScrollElement().scrollHeight;
        // }

        scrolltoBottom("new message");
    }

    function scrolltoBottom(type) {
        if (chatContainerRef.current) {
            const { scrollHeight, clientHeight } = chatContainerRef.current;
            chatContainerRef.current.scrollTop = scrollHeight - clientHeight;
          }
        // if (chatContainerRef.current.el) {
        //     chatContainerRef.current.getScrollElement().scrollTop = chatContainerRef.current.getScrollElement().scrollHeight;
        // }
    }


    const deleteMessage = (id) => {
        let conversation = chatMessages;

        var filtered = conversation.filter(function (item) {
            return item.id !== id;
        });

        setchatMessages(filtered);
    }


    return (
        <React.Fragment>
            <div className="user-chat w-100 overflow-hidden">

                <div className="d-lg-flex">

                    <div className={props.userSidebar ? "w-70" : "w-100"}>

                        {/* render user head */}
                        <UserHead />

                        <SimpleBar
                            style={{ maxHeight: "100%" }}
                            ref={chatContainerRef}
                            className="chat-conversation p-3 p-lg-4"
                            id="messages">
                            <ul className="list-unstyled mb-0">


                                {
                                    chatMessages.map((chat, key) =>
                                        chat.isToday && chat.isToday === true ? <li key={"dayTitle" + key}>
                                            <div className="chat-day-title">
                                                <span className="title">Today</span>
                                            </div>
                                        </li> :
                                            (props.recentChatList[props.active_user].isGroup === true) ?
                                                <li key={key} className={chat.role === "user" ? "right" : ""}>
                                                    <div className="conversation-list">

                                                        <div className="chat-avatar">
                                                            {chat.role === "user" ? <img src={avatar1} alt="filmigpt" /> :
                                                                props.recentChatList[props.active_user].profilePicture === "Null" ?
                                                                    <div className="chat-user-img align-self-center me-3">
                                                                        <div className="avatar-xs">
                                                                            <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                                                                {chat.userName && chat.userName.charAt(0)}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    : <img src={props.recentChatList[props.active_user].profilePicture} alt="filmigpt" />
                                                            }
                                                        </div>

                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    {
                                                                        chat.content &&
                                                                        <p className="mb-0">
                                                                            {chat.content}
                                                                        </p>
                                                                    }
                                                                    {
                                                                        chat.imageMessage &&
                                                                        // image list component
                                                                        <ImageList images={chat.imageMessage} />
                                                                    }
                                                                    {
                                                                        chat.fileMessage &&
                                                                        //file input component
                                                                        <FileList fileName={chat.fileMessage} fileSize={chat.size} />
                                                                    }
                                                                    {
                                                                        chat.isTyping &&
                                                                        <p className="mb-0">
                                                                            typing
                                                                            <span className="animate-typing">
                                                                                <span className="dot ms-1"></span>
                                                                                <span className="dot ms-1"></span>
                                                                                <span className="dot ms-1"></span>
                                                                            </span>
                                                                        </p>
                                                                    }
                                                                    {
                                                                        // !chat.isTyping && <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">{new Date(chat.time).toLocaleTimeString([], {hour:'2-digit', minute: '2-digit', hour12: true, hourCycle: 'h12'}).toUpperCase()}</span></p>
                                                                    }
                                                                </div>
                                                                {
                                                                    !chat.isTyping &&
                                                                    <UncontrolledDropdown className="align-self-start">
                                                                        <DropdownToggle tag="a">
                                                                            <i className="ri-more-2-fill"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu>
                                                                            <DropdownItem>{t('Copy')} <i className="ri-file-copy-line float-end text-muted"></i></DropdownItem>
                                                                            <DropdownItem>{t('Save')} <i className="ri-save-line float-end text-muted"></i></DropdownItem>
                                                                            <DropdownItem onClick={toggle}>Forward <i className="ri-chat-forward-line float-end text-muted"></i></DropdownItem>
                                                                            <DropdownItem onClick={() => deleteMessage(chat.id)}>Delete <i className="ri-delete-bin-line float-end text-muted"></i></DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                }

                                                            </div>
                                                            {
                                                                <div className="conversation-name">{chat.role === "user" ? "You" : chat.userName}</div>
                                                            }
                                                        </div>
                                                    </div>
                                                </li>
                                                :
                                                <li key={key} className={chat.role === "user" ? "right" : ""}>
                                                    <div className="conversation-list">
                                                        {
                                                            //logic for display user name and profile only once, if current and last messaged sent by same receiver
                                                            chatMessages[key + 1] ? chatMessages[key].role === chatMessages[key + 1].role ?

                                                                <div className="chat-avatar">
                                                                    <div className="blank-div"></div>
                                                                </div>
                                                                :
                                                                <div className="chat-avatar">
                                                                    {chat.role === "user" ? <img src={avatar1} alt="filmigpt" /> :
                                                                        props.recentChatList[props.active_user].profilePicture === "Null" ?
                                                                            <div className="chat-user-img align-self-center me-3">
                                                                                <div className="avatar-xs">
                                                                                    <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                                                                        {props.recentChatList[props.active_user].name.charAt(0)}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            : <img src={props.recentChatList[props.active_user].profilePicture} alt="filmigpt" />
                                                                    }
                                                                </div>
                                                                : <div className="chat-avatar">
                                                                    {chat.role === "user" ? <img src={avatar1} alt="filmigpt" /> :
                                                                        props.recentChatList[props.active_user].profilePicture === "Null" ?
                                                                            <div className="chat-user-img align-self-center me-3">
                                                                                <div className="avatar-xs">
                                                                                    <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                                                                        {props.recentChatList[props.active_user].name.charAt(0)}
                                                                                    </span>
                                                                                </div>
                                                                            </div>
                                                                            : <img src={props.recentChatList[props.active_user].profilePicture} alt="filmigpt" />
                                                                    }
                                                                </div>
                                                        }


                                                        <div className="user-chat-content">
                                                            <div className="ctext-wrap">
                                                                <div className="ctext-wrap-content">
                                                                    {
                                                                        chat.content &&
                                                                        <p className="mb-0">
                                                                            {chat.content}
                                                                        </p>
                                                                    }
                                                                    {
                                                                        chat.imageMessage &&
                                                                        // image list component
                                                                        <ImageList images={chat.imageMessage} />
                                                                    }
                                                                    {
                                                                        chat.fileMessage &&
                                                                        //file input component
                                                                        <FileList fileName={chat.fileMessage} fileSize={chat.size} />
                                                                    }
                                                                    {
                                                                        chat.isTyping &&
                                                                        <p className="mb-0">
                                                                            typing
                                                                            <span className="animate-typing">
                                                                                <span className="dot ms-1"></span>
                                                                                <span className="dot ms-1"></span>
                                                                                <span className="dot ms-1"></span>
                                                                            </span>
                                                                        </p>
                                                                    }
                                                                    {
                                                                        // !chat.isTyping && <p className="chat-time mb-0"><i className="ri-time-line align-middle"></i> <span className="align-middle">{new Date(chat.time).toLocaleTimeString([], {hour:'2-digit', minute: '2-digit', hour12: true, hourCycle: 'h12'}).toUpperCase()}</span></p>
                                                                    }
                                                                </div>
                                                                {/* {
                                                                    !chat.isTyping &&
                                                                    <UncontrolledDropdown className="align-self-start">
                                                                        <DropdownToggle tag="a">
                                                                            <i className="ri-more-2-fill"></i>
                                                                        </DropdownToggle>
                                                                        <DropdownMenu>
                                                                            <DropdownItem>{t('Copy')} <i className="ri-file-copy-line float-end text-muted"></i></DropdownItem>
                                                                            <DropdownItem>{t('Save')} <i className="ri-save-line float-end text-muted"></i></DropdownItem>
                                                                            <DropdownItem onClick={toggle}>Forward <i className="ri-chat-forward-line float-end text-muted"></i></DropdownItem>
                                                                            <DropdownItem onClick={() => deleteMessage(chat.id)}>Delete <i className="ri-delete-bin-line float-end text-muted"></i></DropdownItem>
                                                                        </DropdownMenu>
                                                                    </UncontrolledDropdown>
                                                                } */}

                                                            </div>
                                                            {
                                                                chatMessages[key + 1] ? 
                                                                chatMessages[key].role === chatMessages[key + 1].role ? null : 

                                                                <div className="conversation-name">{chat.role === "user" ? 

                                                                "You" : props.recentChatList[props.active_user].name}</div> : 

                                                                <div className="conversation-name">{chat.role === "user" ? 
                                                                
                                                                "You" : props.recentChatList[props.active_user].name}</div>
                                                            }

                                                        </div>
                                                    </div>
                                                </li>
                                    )
                                }
                            </ul>
                        </SimpleBar>

                        <Modal backdrop="static" isOpen={modal} centered toggle={toggle}>
                            <ModalHeader toggle={toggle}>Forward to...</ModalHeader>
                            <ModalBody>
                                <CardBody className="p-2">
                                    <SimpleBar style={{ maxHeight: "200px" }}>
                                        <SelectContact handleCheck={() => { }} />
                                    </SimpleBar>
                                    <ModalFooter className="border-0">
                                        <Button color="primary">Forward</Button>
                                    </ModalFooter>
                                </CardBody>
                            </ModalBody>
                        </Modal>

                        <ChatInput onaddMessage={addMessage} activeUserChatInputPlaceholder={props.userchat_inputplaceholder.find(x => x.id == props.recentChatList[props.active_user].id)?.placeholder} />
                    </div>

                    <UserProfileSidebar activeUser={props.recentChatList[props.active_user]} />

                </div>
            </div>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    const { active_user, user, userchat_inputplaceholder } = state.Chat;
    const { userSidebar } = state.Layout;
    return { active_user, userSidebar, user , userchat_inputplaceholder};
};

export default withRouter(connect(mapStateToProps, { openUserSidebar, setFullUser })(UserChat));

