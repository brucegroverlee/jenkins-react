import { 
  FETCH_SESSION_SUCCESS,
  FETCH_SESSION_FAILURE,
  RESET_SESSION
} from '../constants/ActionTypes'

import * as session from '../modules/session';

const initState = {
  email: '',
  token: ''
};

/**
 * @function session
 */
export default (state = session.init(), action) => {
  switch (action.type) {
    case FETCH_SESSION_SUCCESS:
      return { 
        email: action.email, 
        token: action.token 
      };

    case FETCH_SESSION_FAILURE:
    case RESET_SESSION:
      return initState;
    
    default:
      return state;
  }
}