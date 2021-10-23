//Pure function
//Don't mutate arguments
//No API calls, no route transitions
//No function calls ie: Math.random()

import { combineReducers } from 'redux';

const initPageReducer = () => {
  const item = (state = {}, action) => {
    //coming from actions fetchPageById
    debugger
    switch(action.type) {
      case 'FETCH_PAGE_BY_ID':
        return action.pages;
      case 'IS_FETCHING_PAGE':
        return [];
      case 'CREATE_PAGE':
        return state;
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) =>{
    switch(action.type) {
      case 'IS_FETCHING_PAGE':
        return true;
      case 'FETCH_PAGE_BY_ID':
        return false
      default:
        return state;
    }
  }

  return combineReducers({
    item,
    isFetching
  })
}// end initPageReducer
const page = initPageReducer();

export default page;