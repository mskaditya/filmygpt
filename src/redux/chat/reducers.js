import {
    CHAT_USER, ACTIVE_USER, FULL_USER, ADD_LOGGED_USER, CREATE_GROUP, FULL_USER_SUCCESS, API_FAILED
} from './constants';


//Import Images
import avatar1 from "../../assets/images/users/avatar-1.jpg";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
//import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../assets/images/users/sharuk.jpg";
import avatar10 from "../../assets/images/users/rajnikanth.jpg";
import avatar11 from "../../assets/images/users/sunnydoel.jpg";
import avatar12 from "../../assets/images/users/gabbar.jpg";
import badmash_badshah from "../../assets/images/users/4.png";
import badnam_munni from "../../assets/images/users/5.png";
import chulbuli_sharmili from "../../assets/images/users/8.png";
import pagla_deewana from "../../assets/images/users/7.png";
import ghazal_e_dil from "../../assets/images/users/10.png";
import amitabh_bachchan from "../../assets/images/users/amitabh.png";

const INIT_STATE = {
    active_user: 0,
    users: [
        //admin is sender and user in receiver
        {
            id: "cb87efc4-740a-4406-ab35-28ab5f1bf672", name: "Badmash badshah", botId: "badmash_badshah", profilePicture: badmash_badshah, status: "online", unRead: 0, roomType: "contact", isGroup: false,
            initialconv: true,
            messages: []
        },
        {
            id: "466c629b-9c71-45d0-9d60-4ea46ea0b0af", name: "Badnam Munni", botId: "badnam_munni", profilePicture: badnam_munni, status: "online", unRead: 0, roomType: "contact", isGroup: false,
            initialconv: true,
            messages: []
        },
        {
            id: "78a2620b-b9c3-4a27-b729-4cb0fbf40fe9", name: "Chulbuli Sharmili", botId: "chulbuli_sharmili", profilePicture: chulbuli_sharmili, status: "online", unRead: 0, roomType: "contact", isGroup: false,
            initialconv: true,
            messages: []
        },
        {
            id: "9010bf43-c253-4a59-9e60-af89f7f81255", name: "Pagla Deewana", botId: "pagla_deewana", profilePicture: pagla_deewana, status: "online", unRead: 0, roomType: "contact", isGroup: false,
            initialconv: true,
            messages: []
        },
        {
            id: "5de61b88-8164-43a1-9cf8-6527a1459b56", name: "Shahrukh Khan", botId: "sharukh_khan", profilePicture: avatar9, status: "online", unRead: 0,roomType: "contact", isGroup: false,
            initialconv: true, messages: []
        },
        {
            id: "247868ec-46e2-4339-a173-10ad682527ef", name: "Amitabh Bachchan", botId: "amitabh_bachchan", profilePicture: amitabh_bachchan, status: "online", unRead: 0, isGroup: true,
            initialconv: true, messages: []
        },
        {
            id: "78ccca4d-4f56-423c-b8d4-244d6a391fc4", name: "Rajinikanth", botId: "rajinikanth", profilePicture: avatar10, status: "online", unRead: 0, isGroup: false, isTyping: false,
            initialconv: true, messages: []
        },
        {
            id: "33941093-6455-44e5-8bd6-5d73c10a96f7", name: "Sunny Doel", botId: "sunny_doel", profilePicture: avatar11, status: "online", unRead: 0, roomType: "contact", isGroup: false,isTyping: false,
            initialconv: true, messages: []
        },
        {
            id: "2d936cce-8cc5-46e1-8159-e6ce8d922568", name: "Ghazal-e-Dil", botId: "ghazal-e-dil", profilePicture: ghazal_e_dil, status: "online", unRead: 0, isGroup: false,
            initialconv: true, messages: []
        },
    ],
    groups: [
        {
            gourpId: 1, name: "#General", profilePicture: "Null", isGroup: true, unRead: 0, desc: "General Group",
            members: [
                { userId: 1, name: "Sara Muller", profilePicture: "Null", role: null },
                { userId: 2, name: "Ossie Wilson", profilePicture: avatar8, role: "admin" },
                { userId: 3, name: "Jonathan Miller", profilePicture: "Null", role: null },
                { userId: 4, name: "Paul Haynes", profilePicture: avatar7, role: null },
                { userId: 5, name: "Yana sha", profilePicture: avatar3, role: null },
                { userId: 6, name: "Steve Walker", profilePicture: avatar6, role: null },
            ]
        },
        {
            gourpId: 2, name: "#Reporting", profilePicture: "Null", isGroup: true, unRead: 23, desc: "reporing Group here...",
            members: [
                { userId: 1, name: "Sara Muller", profilePicture: "Null", role: null },
                { userId: 2, name: "Ossie Wilson", profilePicture: avatar8, role: "admin" },
                { userId: 3, name: "Jonathan Miller", profilePicture: "Null", role: null },
                { userId: 4, name: "Paul Haynes", profilePicture: avatar7, role: null },
                { userId: 5, name: "Yana sha", profilePicture: avatar3, role: null },
                { userId: 6, name: "Steve Walker", profilePicture: avatar6, role: null },
            ]
        },
        {
            gourpId: 3, name: "#Designer", profilePicture: "Null", isGroup: true, unRead: 0, isNew: true, desc: "designers Group",
            members: [
                { userId: 1, name: "Sara Muller", profilePicture: "Null", role: null },
                { userId: 2, name: "Ossie Wilson", profilePicture: avatar8, role: "admin" },
                { userId: 3, name: "Jonathan Miller", profilePicture: "Null", role: null },
                { userId: 4, name: "Paul Haynes", profilePicture: avatar7, role: null },
                { userId: 5, name: "Yana sha", profilePicture: avatar3, role: null },
                { userId: 6, name: "Steve Walker", profilePicture: avatar6, role: null },
            ]
        },
        {
            gourpId: 4, name: "#Developers", profilePicture: "Null", isGroup: true, unRead: 0, desc: "developers Group",
            members: [
                { userId: 1, name: "Sara Muller", profilePicture: "Null", role: null },
                { userId: 2, name: "Ossie Wilson", profilePicture: avatar8, role: "admin" },
                { userId: 3, name: "Jonathan Miller", profilePicture: "Null", role: null },
                { userId: 4, name: "Paul Haynes", profilePicture: avatar7, role: null },
                { userId: 5, name: "Yana sha", profilePicture: avatar3, role: null },
                { userId: 6, name: "Steve Walker", profilePicture: avatar6, role: null },
            ]
        },
        {
            gourpId: 5, name: "#Project-aplha", profilePicture: "Null", isGroup: true, unRead: 0, isNew: true, desc: "project related Group",
            members: [
                { userId: 1, name: "Sara Muller", profilePicture: "Null", role: null },
                { userId: 2, name: "Ossie Wilson", profilePicture: avatar8, role: "admin" },
                { userId: 3, name: "Jonathan Miller", profilePicture: "Null", role: null },
                { userId: 4, name: "Paul Haynes", profilePicture: avatar7, role: null },
                { userId: 5, name: "Yana sha", profilePicture: avatar3, role: null },
                { userId: 6, name: "Steve Walker", profilePicture: avatar6, role: null },
            ]
        },
        {
            gourpId: 6, name: "#Snacks", profilePicture: "Null", isGroup: true, unRead: 0, desc: "snacks Group",
            members: [
                { userId: 1, name: "Sara Muller", profilePicture: "Null", role: null },
                { userId: 2, name: "Ossie Wilson", profilePicture: avatar8, role: "admin" },
                { userId: 3, name: "Jonathan Miller", profilePicture: "Null", role: null },
                { userId: 4, name: "Paul Haynes", profilePicture: avatar7, role: null },
                { userId: 5, name: "Yana sha", profilePicture: avatar3, role: null },
                { userId: 6, name: "Steve Walker", profilePicture: avatar6, role: null },
            ]
        },
    ],
    contacts: [
        { id: 1, name: "Albert Rodarte" },
        { id: 2, name: "Allison Etter" },
        { id: 3, name: "Craig Smiley" },
        { id: 4, name: "Daniel Clay" },
        { id: 5, name: "Doris Brown" },
        { id: 6, name: "Iris Wells" },
        { id: 7, name: "Juan Flakes" },
        { id: 8, name: "John Hall" },
        { id: 9, name: "Joy Southern" },
        { id: 10, name: "Mary Farmer" },
        { id: 11, name: "Mark Messer" },
        { id: 12, name: "Michael Hinton" },
        { id: 13, name: "Ossie Wilson" },
        { id: 14, name: "Phillis Griffin" },
        { id: 15, name: "Paul Haynes" },
        { id: 16, name: "Rocky Jackson" },
        { id: 17, name: "Sara Muller" },
        { id: 18, name: "Simon Velez" },
        { id: 19, name: "Steve Walker" },
        { id: 20, name: "Hanah Mile" },
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
                active_user: action.payload
            };

        case FULL_USER:
            return {
                ...state,
                loading: true,
                user: action.payload
            };

        case FULL_USER_SUCCESS:
            return { ...state, user: action.payload, loading: false, error: null };

        case ADD_LOGGED_USER:
            const newUser = action.payload
            return {
                ...state, users: [
                    ...state.users, newUser
                ]
            };

        case CREATE_GROUP:
            const newGroup = action.payload
            return {
                ...state, groups: [
                    ...state.groups, newGroup
                ]
            };

        case API_FAILED:
            return { ...state, loading: false, error: action.payload, isUserLogout: false };

        default: return { ...state };
    }
}

export default Chat;
