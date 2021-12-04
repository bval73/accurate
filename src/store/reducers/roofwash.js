//Pure function
//Don't mutate arguments
//No API calls, no route transitions
//No function calls ie: Math.random()

import { combineReducers } from 'redux';

const initRoofWashReducer = () => {
  const item = (state = [], action) => {
    //coming from actions fetchRoofWash
    switch(action.type) {
      case 'ROOF_WASH':
        return action.pages;
      case 'CREATE_ROOF_WASH':
        return state;
      case 'IS_FETCHING_ROOF_WASH':
        return [];
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) =>{
    switch(action.type) {
      case 'IS_FETCHING_ROOF_WASH':
        return true;
      case 'ROOF_WASH':
        return false
      default:
        return state;
    }
  }

  return combineReducers({
    item,
    isFetching
  })
}// end initRoofWashReducer
const roofwash = initRoofWashReducer();

export default roofwash;