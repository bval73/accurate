
import { combineReducers } from 'redux';

const initEmailSend = () => {
  const item = (state = [], action) => {
    //coming from actions sendEmail

    switch(action.type) {
      case 'SEND_EMAIL':
        return action.contact;
      case 'IS_SENDING_EMAIL':
        return [];  
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) =>{
    switch(action.type) {
      case 'IS_SENDING_EMAIL':
        return true;
      case 'SEND_EMAIL':
        return false
      default:
        return state;
    }
  }


  return combineReducers({
    item,
    isFetching
  })
}// end initEmailSend
const email = initEmailSend();


export default email;
