
import axiosService from '../services/AxiosService';
const { accAxios } = axiosService;


// job
export const fetchJob = () => async dispatch => {
  dispatch({type: 'IS_FETCHING_JOB'});
  const res = await accAxios.get('/jobs');
    //send to reducer
  dispatch({
    type: 'FETCH_JOB',
    jobs: res.data
  });
}
// job by id 
export const fetchJobById = id => async dispatch => {
  dispatch({type: 'IS_FETCHING_JOB'});
  const res = await accAxios.get(`/jobs/${id}`);
    //send to reducer
  dispatch({
    type: 'FETCH_JOB_BY_ID',
    jobs: res.data
  });
}

// job by dt
export const fetchJobByDt = date => async dispatch => {
  dispatch({type: 'IS_FETCHING_JOB'});
  const res = await accAxios.get(`/jobs/day/${date}`);
  dispatch({
    type: 'FETCH_JOB_BY_DT',
    jobs: res.data
  });
}

// job by dt tech
export const fetchJobByDtTech = (date, assignedTech) => async dispatch => {
  dispatch({type: 'IS_FETCHING_JOB'});
  const res = await accAxios.get(`/jobs/tech/${assignedTech}/${date}`);
  dispatch({
    type: 'FETCH_JOB_BY_DT_TECH',
    jobs: res.data
  });
}

//send email notification for appointment
export const sendApptEmail = (createdJob) => dispatch => {
  dispatch({type: 'IS_SENDING_EMAIL'});
  return accAxios.post(`/job/appointment/sendEmail`, createdJob);
}

