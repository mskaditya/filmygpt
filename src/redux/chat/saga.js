import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getFirebaseBackend } from "../../helpers/firebase";
import avatar9 from "../../assets/images/users/sharuk.jpg";
import avatar10 from "../../assets/images/users/rajnikanth.jpg";
import avatar11 from "../../assets/images/users/sunnydoel.jpg";
import ghazal_e_dil from "../../assets/images/users/10.png";
import amitabh_bachchan from "../../assets/images/users/kbc.jpg";
import alia_bhatt from "../../assets/images/users/alia_bhatt.jpeg";

import {
    FULL_USER
} from './constants';

import {
    fullUserSuccess,
    chatApiError,
    activeUser
} from './actions';

import config from "../../config";


//Initilize firebase
const fireBaseBackend = getFirebaseBackend();

const bot_info = [
    {botId: "badmash_badshah", id : "cb87efc4-740a-4406-ab35-28ab5f1bf672", initialconv : false, introText : "Be a dude, crude or rude! Hum toh badmaash sab se. Baat karke toh dekho" ,isGroup : false, isTyping : false, 
    name : "Badmash badshah",profilePicture : "/static/media/4.3cf22d3ff5aba886644b.png",roomType : "contact",
    status :  "online",unRead : 0 , messages: []},

    {"id":"466c629b-9c71-45d0-9d60-4ea46ea0b0af","ConversationId":"1210b0d5-533f-47aa-97d8-54fe2bc9e104","SessionId":"678069a1-7f28-4546-a90f-ad16e7871bd7","InitialConversationTimeStamp":"2023-08-11T03:57:50.087Z","name":"Badnam Munni","botId":"badnam_munni","profilePicture":"/static/media/5.af18cb6ab2d724fac3c7.png","status":"online","unRead":0,"roomType":"contact","isGroup":false,"initialconv":false,"introText":"Is Munni ko badnaam hona hi pada aap se baat karne keliye!",
    "messages": []},
    {
        id: "247868ec-46e2-4339-a173-10ad682527ef", ConversationId:"", SessionId:"", InitialConversationTimeStamp:"", name: "KBC with Amitabh Bachchan", botId: "amitabh_bachchan", profilePicture: amitabh_bachchan, status: "online", unRead: 0, isGroup: true,
        initialconv: false, 
        introText: "Kheloge KBC? Hot seat pe baithne ke liye tayyar ho?",
        messages: []
    },
    {
        id: "e581afee-de94-4100-b2e0-fca62523917e", ConversationId:"", SessionId:"", InitialConversationTimeStamp:"", name: "Alia Bhatt", botId: "alia_bhatt", profilePicture: alia_bhatt, status: "online", unRead: 0, roomType: "contact", isGroup: false,isTyping: false,
        initialconv: false, 
        introText: "Main tenu samjhawan ki, Tera bina lagda ji!",
        messages: []
    },
    {
        id: "5de61b88-8164-43a1-9cf8-6527a1459b56", ConversationId:"", SessionId:"", InitialConversationTimeStamp:"", name: "Shahrukh Khan", botId: "sharukh_khan", profilePicture: avatar9, status: "online", unRead: 0,roomType: "contact", isGroup: false,
        initialconv: false,
        introText: "Hum baat karenge to Dil Paagal hoga? Ya don pakda jaayega?",
        messages: []
    },
    {
        id: "78ccca4d-4f56-423c-b8d4-244d6a391fc4", ConversationId:"", SessionId:"", InitialConversationTimeStamp:"", name: "Rajinikanth", botId: "rajinikanth", profilePicture: avatar10, status: "online", unRead: 0, isGroup: false, isTyping: false,
        initialconv: false, 
        introText: "Mere se ek conversation 100 conversation barabar he!",
        messages: []
    },
    {
        id: "33941093-6455-44e5-8bd6-5d73c10a96f7", ConversationId:"", SessionId:"", InitialConversationTimeStamp:"", name: "Sunny Deol", botId: "sunny_doel", profilePicture: avatar11, status: "online", unRead: 0, roomType: "contact", isGroup: false,isTyping: false,
        initialconv: false, 
        introText: "Mein jaanta tha sab ko mere se chat kar na he! Hum he utni range ke Sikandar!",
        messages: []
    },
    {
        id: "2d936cce-8cc5-46e1-8159-e6ce8d922568", ConversationId:"", SessionId:"", InitialConversationTimeStamp:"", name: "Ghazal-e-Dil", botId: "ghazal-e-dil", profilePicture: ghazal_e_dil, status: "online", unRead: 0, isGroup: false,
        initialconv: false, 
        introText: "Saath mein Shayari Likhen? Ud chalein is rangon ki duniya mein?",
        messages: []
    }
]

const bot_active_user = [
    {botId: "badmash_badshah", active_user: 0},
    {botId: "badnam_munni", active_user: 1},
    {botId: "amitabh_bachchan", active_user: 2},
    {botId: "alia_bhatt", active_user: 3},
    {botId: "sharukh_khan", active_user: 4},
    {botId: "rajinikanth", active_user: 5},
    {botId: "sunny_doel", active_user: 6},
    {botId: "ghazal-e-dil", active_user: 7}
]

/**
 * Sets the session
 * @param {*} user 
 */

// const create = new APIClient().create;

const sendMessage = async (messages) => {
     const url = `${config.API_URL}/`;
     const payload = messages 
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'   
        },
        body: JSON.stringify(payload)
      };
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('Request failed'); // Handle non-2xx responses if needed
      }
      const responseData = await response.json();
      return responseData; // Return the response data    
};


const retrieveMessage = async (data) => {
    const url = `${config.API_URL}/retrieve`;
    const payload = {
        "sessionId": "678069a1-7f28-4546-a90f-ad16e7871bd7" ,
        "conversationId": "1210b0d5-533f-47aa-97d8-54fe2bc9e104"
    }
     const requestOptions = {
       method: 'POST',
       headers: { 'Content-Type': 'application/json'   
       },
       body: JSON.stringify(payload)
     };
     const response = await fetch(url, requestOptions);
     if (!response.ok) {
       throw new Error('Request failed'); // Handle non-2xx responses if needed
     }
     const responseData = await response.json();

     if (responseData.body) {
        let currentBotDetails =  bot_info.find(x => x.botId == responseData.body[0].BotId);
        currentBotDetails.ConversationId =  responseData.body[0].ConversationId
        currentBotDetails.SessionId =  responseData.body[0].SessionId
        currentBotDetails.messages = responseData.body[0].Messages
        return currentBotDetails;
     }
     return null; // Return the response data    
};



/**
 * Chat message payload
 * @param {*} payload - message
 */
function* fullUser({ payload: { users, IsRetrieve} }) {
    try {
        if(process.env.REACT_APP_DEFAULTAUTH === "firebase") {
            const response = yield call(fireBaseBackend.loginUser, users);
            yield put(fullUserSuccess(response));
            
        } else {
            if (IsRetrieve) {
                const response = yield call(retrieveMessage, users);
                let currentactiveUser = bot_active_user.find(x => x.botId == response.botId)
                yield put(activeUser(currentactiveUser.active_user)) // reset the active user
                yield put(fullUserSuccess(response));
            }
            else {
                const response = yield call(sendMessage, users);
                yield put(fullUserSuccess(response.body));
            }


        }
    } catch (error) {
        yield put(chatApiError(error));
    }
}




export function* watchFullUser() {
    yield takeEvery(FULL_USER, fullUser);
}

function* chatSaga() {
    yield all([
        fork(watchFullUser)
    ]);
}

export default chatSaga;