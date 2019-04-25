import { combineReducers } from 'redux'
import isFetchingReducer from './isFetchingReducer';
import sessionReducer from './sessionReducer';

export default combineReducers({
  isFetching: isFetchingReducer,
  session: sessionReducer
})