import {
    CHAT_USER, ACTIVE_USER,FULL_USER, ADD_LOGGED_USER, CREATE_GROUP, FULL_USER_SUCCESS, API_FAILED
} from './constants';


//Import Images
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import img6 from "../../assets/images/small/img-6.jpg";
import img4 from "../../assets/images/small/img-4.jpg";
import img7 from "../../assets/images/small/img-7.jpg";

const INIT_STATE = {
	active_user : 0,
    users: [
        //admin is sender and user in receiver
        { id : 0, name : "Patrick Hendricks", profilePicture : avatar2, status : "online", unRead : 0, roomType : "contact", isGroup: false,
        initialconv: "true", 
            messages: [
                { id: 1, content: "hi", time: "01:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 2, content: "hi patrick", time: "10.00", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 3, content: "how's going on your project?", time: "01:05", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 4, content: "Do you need any help?", time: "01:06", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id : 33, isToday : true },
                { id: 5, content: "Let me know?", time: "01:06", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 6, content: "hi...Good Morning!", time: "09:05", userType: "sender", isImageMessage : false, isFileMessage : false },
                { id: 7, content: "Image", time: "10:30", userType: "receiver", isImageMessage : true, isFileMessage : false, imageMessage : [ { image : img4 }, { image : img7 } ] },
                { id: 8, content: "please, save this pictures to your file and give it to me after you have done with editing!", time: "10:31", userType: "receiver", isImageMessage : false, isFileMessage : false },
                { id: 9, content: "okay sure😄👍", time: "02:50 PM", userType: "sender", isImageMessage : false, isFileMessage : false },
        ] }
    ],
    groups : [
        { gourpId : 1, name : "#General", profilePicture : "Null", isGroup : true, unRead : 0, desc : "General Group",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
        { gourpId : 2, name : "#Reporting", profilePicture : "Null", isGroup : true, unRead : 23,  desc : "reporing Group here...",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
        { gourpId : 3, name : "#Designer", profilePicture : "Null", isGroup : true, unRead : 0, isNew : true, desc : "designers Group",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
        { gourpId : 4, name : "#Developers", profilePicture : "Null", isGroup : true, unRead : 0,  desc : "developers Group",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
        { gourpId : 5, name : "#Project-aplha", profilePicture : "Null", isGroup : true, unRead : 0, isNew : true, desc : "project related Group",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
        { gourpId : 6, name : "#Snacks", profilePicture : "Null", isGroup : true, unRead : 0,  desc : "snacks Group",
            members : [
                { userId : 1, name : "Sara Muller", profilePicture : "Null", role : null },
                { userId : 2, name : "Ossie Wilson", profilePicture : avatar8, role : "admin" },
                { userId : 3, name : "Jonathan Miller", profilePicture : "Null", role : null },
                { userId : 4, name : "Paul Haynes", profilePicture : avatar7, role : null },
                { userId : 5, name : "Yana sha", profilePicture : avatar3, role : null },
                { userId : 6, name : "Steve Walker", profilePicture : avatar6, role : null },
            ]    
        },
    ],
    contacts : [
        { id : 1, name : "Albert Rodarte" },
        { id : 2, name : "Allison Etter" },
        { id : 3, name : "Craig Smiley" },
        { id : 4, name : "Daniel Clay" },
        { id : 5, name : "Doris Brown" },
        { id : 6, name : "Iris Wells" },
        { id : 7, name : "Juan Flakes" },
        { id : 8, name : "John Hall" },
        { id : 9, name : "Joy Southern" },
        { id : 10, name : "Mary Farmer" },
        { id : 11, name : "Mark Messer" },
        { id : 12, name : "Michael Hinton" },
        { id : 13, name : "Ossie Wilson" },
        { id : 14, name : "Phillis Griffin" },
        { id : 15, name : "Paul Haynes" },
        { id : 16, name : "Rocky Jackson" },
        { id : 17, name : "Sara Muller" },
        { id : 18, name : "Simon Velez" },
        { id : 19, name : "Steve Walker" },
        { id : 20, name : "Hanah Mile" },
    ],
    user: null
};

const Chat = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CHAT_USER:
            return { ...state };

        case ACTIVE_USER:
            return { 
            	...state,
                active_user : action.payload };
                
        case FULL_USER:
            return { 
            	...state, 
                loading : true,
                user : action.payload };

        case FULL_USER_SUCCESS:
            return { ...state, users: action.payload, loading: false, error: null };             

        case ADD_LOGGED_USER:
            const newUser =  action.payload
            return{
                ...state, users : [
                    ...state.users, newUser
                ]
            };

        case CREATE_GROUP :
            const newGroup =  action.payload
            return {
                ...state, groups : [
                    ...state.groups, newGroup
                ]
            };

        case API_FAILED:
            return { ...state, loading: false, error: action.payload, isUserLogout : false };

        default: return { ...state };
    }
}

export default Chat;