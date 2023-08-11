import {
    CHAT_USER,ACTIVE_USER,FULL_USER,FULL_USER_SUCCESS, ADD_LOGGED_USER, CREATE_GROUP, API_FAILED
} from './constants';


export const chatUser = () => ({
    type: CHAT_USER
});

export const activeUser = (userId) => ({
    type: ACTIVE_USER,
    payload : userId
});

export const setFullUser = ( users, IsRetrieve ) => ({
    type: FULL_USER,
    payload : {users, IsRetrieve}
});

export const fullUserSuccess = (users) => ({
    type: FULL_USER_SUCCESS,
    payload: users
});

export const addLoggedinUser = (userData) => ({
    type: ADD_LOGGED_USER,
    payload : userData
});

export const createGroup = (groupData) => ({
    type : CREATE_GROUP,
    payload : groupData
});

export const chatApiError = (error) => ({
    type: API_FAILED,
    payload: error
});