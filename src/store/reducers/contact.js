
import { combineReducers } from 'redux';

const initEmailSend = () => {
  debugger
  const item = (state = [], action) => {
    //coming from actions contact
    switch(action.type) {
      case 'SEND_EMAIL':
        return action.contact;
      case 'IS_SEND_EMAIL':
        return state;  
      default:
        return state;
    }
  }


return combineReducers({
  item
})
}// end initHouseWashReducer
const sendemail = initEmailSend();


export default sendemail;