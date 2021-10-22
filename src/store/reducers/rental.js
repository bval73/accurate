//Pure function
//Don't mutate arguments
//No API calls, no route transitions
//No function calls ie: Math.random()

import { combineReducers } from 'redux';


const initRentalReducer = () => {
  const item = (state = {}, action) => {
    // debugger
    switch(action.type) {
      case 'FETCH_RENTAL_BY_ID':
        return action.rental;
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) =>{
    switch(action.type) {
      case 'IS_FETCHING_RENTAL':
        return true;
      case 'FETCH_RENTAL_BY_ID':
        return false
      default:
        return state;
    }
  }

  return combineReducers({
    item,
    isFetching
  })
}// end initRentalReducer
const rental = initRentalReducer();

export default rental;
