//Pure function
//Don't mutate arguments
//No API calls, no route transitions
//No function calls ie: Math.random()

import { combineReducers } from 'redux';

const initHouseWashReducer = () => {
  const item = (state = [], action) => {
    //coming from actions fetchHouseWash
    switch(action.type) {
      case 'HOUSE_WASH':
        return action.pages;
      case 'CREATE_HOUSE_WASH':
        return state;
        case 'IS_FETCHING_HOUSE_WASH':
          return [];
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) =>{
    switch(action.type) {
      case 'IS_FETCHING_HOUSE_WASH':
        return true;
      case 'HOUSE_WASH':
        return false
      default:
        return state;
    }
  }

  return combineReducers({
    item,
    isFetching
  })
}// end initHouseWashReducer
const housewash = initHouseWashReducer();


export default housewash;
