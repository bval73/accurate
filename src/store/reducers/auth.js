
//Pure function
//Don't mutate arguments
//No API calls, no route transitions
//No function calls ie: Math.random()

import { combineReducers } from 'redux';


const initAuthReducer = () => {
  const isAuth = (state = false, action) => {
  //  debugger
    switch(action.type) {
      case 'USER_AUTHENTICATED':
        return true
      case 'LOG_OUT_USER':
        return false;
      default:
        return state;
    }
  }

  const username = (state = '', action) =>{
    switch(action.type) {
      case 'USER_AUTHENTICATED':
        return action.username;
      case 'LOG_OUT_USER':
        return '';
      default:
        return state;
    }
  }

  const usertype = (state = '', action) =>{
    switch(action.type) {
      case 'USER_AUTHENTICATED':
        return action.usertype;
      case 'LOG_OUT_USER':
        return '';
      default:
        return state;
    }
  }

  return combineReducers({
    isAuth,
    username,
    usertype
  })
}// end initAuthReducer
const auth = initAuthReducer();

export default auth;
