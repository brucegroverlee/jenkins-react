import { RESET_SESSION } from '../constants/ActionTypes';
import history from '../modules/history';
import * as session from '../modules/session';

export const logout = () => (dispatch, getState) => {
  session.clean();
  
  dispatch({
    type: RESET_SESSION
  });

  history.replace({
    pathname: '/'
  });
};