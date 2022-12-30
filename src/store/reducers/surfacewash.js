//Pure function
//Don't mutate arguments
//No API calls, no route transitions
//No function calls ie: Math.random()

import { combineReducers } from 'redux';

const initSurfaceWashReducer = () => {
  const item = (state = [], action) => {
    //coming from actions fetchSurfaceWash
    switch(action.type) {
      case 'SURFACE_WASH':
        return action.pages;
      case 'FETCHING_PAGE_BY_ID':
        return action.pages;
      case 'IS_FETCHING_SURFACE_WASH':
        return [];
      case 'CREATE_SURFACE_WASH':
        return state;
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) =>{
    switch(action.type) {
      case 'IS_FETCHING_SURFACE_WASH':
        return true;
      case 'SURFACE_WASH':
        return false
      default:
        return state;
    }
  }

  return combineReducers({
    item,
    isFetching
  })
}// end initSurfaceWashReducer
const surfacewash = initSurfaceWashReducer();

export default surfacewash;
