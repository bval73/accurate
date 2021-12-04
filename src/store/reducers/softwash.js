//Pure function
//Don't mutate arguments
//No API calls, no route transitions
//No function calls ie: Math.random()


import { combineReducers } from 'redux';

const initSoftWashReducer = () => {
  const item = (state = [], action) => {
    //coming from actions fetchHouseWash
    switch(action.type) {
      case 'SOFT_WASH':
        return action.pages;
      case 'CREATE_SOFT_WASH':
        return state;
      case 'IS_FETCHING_SOFT_WASH':
        return [];
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) =>{
    switch(action.type) {
      case 'IS_FETCHING_SOFT_WASH':
        return true;
      case 'SOFT_WASH':
        return false
      default:
        return state;
    }
  }

  return combineReducers({
    item,
    isFetching
  })
}// end initSoftWashReducer
const softwash = initSoftWashReducer();


export default softwash;