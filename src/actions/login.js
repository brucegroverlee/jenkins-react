import { FETCH_SESSION, FETCH_SESSION_SUCCESS, FETCH_SESSION_FAILURE } from '../constants/ActionTypes';
import { postRequest } from '../api/httpRequests';
import history from '../modules/history';
import * as session from '../modules/session';

/**
 * 
 * @param {String} email 
 */
export const validEmail = (email) => {
  if (email===undefined) {
    return false;
  }
  return email.includes('@');
};

/**
 * 
 * @param {String} name 
 * @param {String} email 
 * @param {String} password 
 */
export const login = (email, password) => async (dispatch, getState) => {
  if (email==='' || password==='' /** email or password are empty */) {
    return false;
  }

  if (email===undefined || password===undefined /** email or password are undefined */) {
    return false;
  }

  if (!validEmail(email)) {
    return false;
  }

  try {
    dispatch({ type: FETCH_SESSION });
    const response = await postRequest(process.env.API_ENDPOINT, { email, password });
    switch (response.status) {
      case 200:
        session.set(email, response.content.token);
        dispatch({ 
          type: FETCH_SESSION_SUCCESS,
          email,
          token: response.content.token
        });
        history.replace({
          pathname: '/dashboard'
        });
        break;
    
      default:
        dispatch({ type: FETCH_SESSION_FAILURE });
        console.error('response status not 200');
        break;
    }
  } catch (err) {
    dispatch({ type: FETCH_SESSION_FAILURE });
    console.error('catch err: ', err);
  }

};