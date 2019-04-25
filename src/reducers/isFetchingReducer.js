import { 
  FETCH_SESSION,
  FETCH_SESSION_SUCCESS,
  FETCH_SESSION_FAILURE
} from '../constants/ActionTypes'

/**
 * @function isFetching
 */
export default (state = false, action) => {
  switch (action.type) {
    case FETCH_SESSION:
      return true
      
    case FETCH_SESSION_SUCCESS:
    case FETCH_SESSION_FAILURE:
      return false
      
    default:
      return state
  }
}