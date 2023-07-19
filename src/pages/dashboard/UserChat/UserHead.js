import React, { useState } from 'react';
import { Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Button, Input, Row, Col, Modal, ModalBody } from "reactstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { openUserSidebar, setFullUser } from "../../../redux/actions";

//import images
import user from '../../../assets/images/users/avatar-4.jpg'

function UserHead(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [dropdownOpen1, setDropdownOpen1] = useState(false);
    const [Callmodal, setCallModal] = useState(false);
    const [Videomodal, setVideoModal] = useState(false);

    const toggle = () => setDropdownOpen(!dropdownOpen);
    const toggle1 = () => setDropdownOpen1(!dropdownOpen1);
    const toggleCallModal = () => setCallModal(!Callmodal);
    const toggleVideoModal = () => setVideoModal(!Videomodal);

    const openUserSidebar = (e) => {
        e.preventDefault();
        props.openUserSidebar();
    }

    function closeUserChat(e) {
        e.preventDefault();
        var userChat = document.getElementsByClassName("user-chat");
        if (userChat) {
            userChat[0].classList.remove("user-chat-show");
        }
    }

    function deleteMessage() {
        let allUsers = props.users;
        let copyallUsers = allUsers;
        copyallUsers[props.active_user].messages = [];

        props.setFullUser(copyallUsers);
    }

    return (
        <React.Fragment>
            <div className="p-3 p-lg-4 border-bottom">
                <Row className="align-items-center">
                    <Col xs={10}>
                        <div className="d-flex align-items-center">
                            <div className="d-block d-lg-none me-2 ms-0">
                                <Link to="#" onClick={(e) => closeUserChat(e)} className="user-chat-remove text-muted font-size-16 p-2">
                                    <i className="ri-arrow-left-s-line"></i></Link>
                            </div>
                            {
                                props.users[props.active_user].profilePicture !== "Null" ?
                                    <div className="me-3 ms-0">
                                        <img src={props.users[props.active_user].profilePicture} className="rounded-circle avatar-md" alt="filmigpt" />
                                    </div>
                                    : <div className="chat-user-img align-self-center me-3">
                                        <div className="avatar-xs">
                                            <span className="avatar-title rounded-circle bg-primary-subtle text-primary">
                                                {props.users[props.active_user].name.charAt(0)}
                                            </span>
                                        </div>
                                    </div>
                            }

                            <div className="flex-grow-1 overflow-hidden">
                                <h5 className="font-size-16 mb-0 text-truncate">
                                    {/* <Link to="#" onClick={(e) => openUserSidebar(e)} className="text-reset user-profile-show"> */}
                                        {props.users[props.active_user].name}
                                    {/* </Link> */}
                                    {(() => {
                                        switch (props.users[props.active_user].status) {
                                            case "online":
                                                return (
                                                    <>
                                                        <i className="ri-record-circle-fill font-size-10 text-success d-inline-block ms-1"></i>
                                                    </>
                                                )

                                            case "away":
                                                return (
                                                    <>
                                                        <i className="ri-record-circle-fill font-size-10 text-warning d-inline-block ms-1"></i>
                                                    </>
                                                )

                                            case "offline":
                                                return (
                                                    <>
                                                        <i className="ri-record-circle-fill font-size-10 text-secondary d-inline-block ms-1"></i>
                                                    </>
                                                )

                                            default:
                                                return;
                                        }
                                    })()}

                                </h5>
                                <div className='ctext-wrap'>
                                    <h7 className="font-size-14 mb-0 text-overflow">
                                        {props.users[props.active_user].introText}
                                    </h7>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xs={2} >
                        <ul className="list-inline user-chat-nav text-end mb-0">

                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/filmigpt/" target='_blank'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#skillIconsInstagram0)" rx="60" /><rect width="256" height="256" fill="url(#skillIconsInstagram1)" rx="60" /><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604h.031Zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396c0 26.688-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413c0-26.704.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5c3.5-3.5 6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563v.025Zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12v.004Zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355c0 28.361 22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355h.002Zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334c-18.41 0-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334Z" /><defs><radialGradient id="skillIconsInstagram0" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#FD5" /><stop offset=".1" stop-color="#FD5" /><stop offset=".5" stop-color="#FF543E" /><stop offset="1" stop-color="#C837AB" /></radialGradient><radialGradient id="skillIconsInstagram1" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771C8" /><stop offset=".128" stop-color="#3771C8" /><stop offset="1" stop-color="#60F" stop-opacity="0" /></radialGradient></defs></g></svg>
                                </a>
                            </li>
                            {/* <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                                <button type="button" onClick={toggleCallModal} className="btn nav-btn" >
                                    <i className="ri-phone-line"></i>
                                </button>
                            </li>
                            <li className="list-inline-item d-none d-lg-inline-block me-2 ms-0">
                                <button type="button" onClick={toggleVideoModal} className="btn nav-btn">
                                    <i className="ri-vidicon-line"></i>
                                </button>
                            </li>

                            <li className="list-inline-item d-none d-lg-inline-block">
                                <Button type="button" color="none" onClick={(e) => openUserSidebar(e)} className="nav-btn user-profile-show">
                                    <i className="ri-user-2-line"></i>
                                </Button>
                            </li>

                            <li className="list-inline-item">
                                <Dropdown isOpen={dropdownOpen1} toggle={toggle1}>
                                    <DropdownToggle className="btn nav-btn " color="none" type="button" >
                                        <i className="ri-more-fill"></i>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem className="d-block d-lg-none user-profile-show" onClick={(e) => openUserSidebar(e)}>View profile <i className="ri-user-2-line float-end text-muted"></i></DropdownItem>
                                        <DropdownItem>Archive <i className="ri-archive-line float-end text-muted"></i></DropdownItem>
                                        <DropdownItem>Muted <i className="ri-volume-mute-line float-end text-muted"></i></DropdownItem>
                                        <DropdownItem onClick={(e) => deleteMessage(e)}>Delete <i className="ri-delete-bin-line float-end text-muted"></i></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </li> */}

                        </ul>
                    </Col>
                </Row>
            </div>

            {/* Start Audiocall Modal */}
            <Modal tabIndex="-1" isOpen={Callmodal} toggle={toggleCallModal} centered>
                <ModalBody>
                    <div className="text-center p-4">
                        <div className="avatar-lg mx-auto mb-4">
                            <img src={user} alt="" className="img-thumbnail rounded-circle" />
                        </div>

                        <h5 className="text-truncate">Doris Brown</h5>
                        <p className="text-muted">Start Audio Call</p>

                        <div className="mt-5">
                            <ul className="list-inline mb-1">
                                <li className="list-inline-item px-2 me-2 ms-0">
                                    <button type="button" className="btn btn-danger avatar-sm rounded-circle" onClick={toggleCallModal}>
                                        <span className="avatar-title bg-transparent font-size-20">
                                            <i className="ri-close-fill"></i>
                                        </span>
                                    </button>
                                </li>
                                <li className="list-inline-item px-2">
                                    <button type="button" className="btn btn-success avatar-sm rounded-circle">
                                        <span className="avatar-title bg-transparent font-size-20">
                                            <i className="ri-phone-fill"></i>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ModalBody>
            </Modal>

            {/* Start VideoCall Modal */}
            <Modal tabIndex="-1" isOpen={Videomodal} toggle={toggleVideoModal} centered>
                <ModalBody>
                    <div className="text-center p-4">
                        <div className="avatar-lg mx-auto mb-4">
                            <img src={user} alt="" className="img-thumbnail rounded-circle" />
                        </div>

                        <h5 className="text-truncate">Doris Brown</h5>
                        <p className="text-muted">Start Video Call</p>

                        <div className="mt-5">
                            <ul className="list-inline mb-1">
                                <li className="list-inline-item px-2 me-2 ms-0">
                                    <button type="button" className="btn btn-danger avatar-sm rounded-circle" onClick={toggleVideoModal}>
                                        <span className="avatar-title bg-transparent font-size-20">
                                            <i className="ri-close-fill"></i>
                                        </span>
                                    </button>
                                </li>
                                <li className="list-inline-item px-2">
                                    <button type="button" className="btn btn-success avatar-sm rounded-circle">
                                        <span className="avatar-title bg-transparent font-size-20">
                                            <i className="ri-vidicon-fill"></i>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </React.Fragment>
    );
}


const mapStateToProps = (state) => {
    const { users, active_user } = state.Chat;
    return { ...state.Layout, users, active_user };
};

export default connect(mapStateToProps, { openUserSidebar, setFullUser })(UserHead);