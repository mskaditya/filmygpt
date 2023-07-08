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


/**
 * Chat message payload
 * @param {*} payload - message
 */
function* fullUser({ payload: user }) {
    try {
        if(process.env.REACT_APP_DEFAULTAUTH === "firebase") {
            const response = yield call(fireBaseBackend.loginUser, user);
            yield put(fullUserSuccess(response));
            
        } else {
            const response = yield call(sendMessage, user);
            yield put(fullUserSuccess(response.body));
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