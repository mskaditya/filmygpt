import { all, call, fork, put, takeEvery } from 'redux-saga/effects';
import { getFirebaseBackend } from "../../helpers/firebase";

import {
    FULL_USER
} from './constants';

import {
    fullUserSuccess,
    chatApiError
} from './actions';

import config from "../../config";


//Initilize firebase
const fireBaseBackend = getFirebaseBackend();

const bot_info = [
    {botId: "badmash_badshah", id : "cb87efc4-740a-4406-ab35-28ab5f1bf672", initialconv : false, introText : "Be a dude, crude or rude! Hum toh badmaash sab se. Baat karke toh dekho" ,isGroup : false, isTyping : false, 
    name : "Badmash badshah",profilePicture : "/static/media/4.3cf22d3ff5aba886644b.png",roomType : "contact",
    status :  "online",unRead : 0 , messages: []}
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
        "sessionId": data.SessionId ,
        "conversationId": data.conversationId
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
        currentBotDetails.messages = responseData.body[0].Messages

        console.log(currentBotDetails)
        return currentBotDetails;
     }
     console.log("empty")
     return null; // Return the response data    
};



/**
 * Chat message payload
 * @param {*} payload - message
 */
function* fullUser({ payload: { user, IsRetrieve} }) {
    try {
        if(process.env.REACT_APP_DEFAULTAUTH === "firebase") {
            const response = yield call(fireBaseBackend.loginUser, user);
            yield put(fullUserSuccess(response));
            
        } else {
            console.log(user);
            if (IsRetrieve) {
                const response = yield call(retrieveMessage, user);
                yield put(fullUserSuccess(response));
            }
            else {
                const response = yield call(sendMessage, user);
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