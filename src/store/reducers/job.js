
import { combineReducers } from 'redux';

const initJobReducer = () => {
  const item = (state = [], action) => {
    //coming from actions 
    switch(action.type) {
      case 'FETCH_JOB':
        return action.jobs;
      case 'FETCH_JOB_BY_ID':
        return action.jobs;
      case 'IS_FETCHING_JOB':
        return [];
      case 'FETCH_JOB_BY_DT':
        return [...state, action.jobs];
      case 'FETCH_JOB_BY_DT_TECH':
        return [...state, action.jobs];
      case 'CREATE_JOB':
        return [...state, action.jobs]; 
      case 'IS_SENDING_EMAIL':
        return [...state, action.jobs];  
      default:
        return state;
    }
  }

  const isFetching = (state = false, action) =>{
    switch(action.type) {
      case 'IS_FETCHING_JOB':
        return true;
      case 'FETCH_JOB_BY_ID':
        return false
      case 'FETCH_JOB':
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
const jobs = initJobReducer();

export default jobs;

