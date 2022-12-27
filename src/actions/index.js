
import axiosService from '../services/AxiosService';
const { accAxios } = axiosService;

export const extractApiErrors = (resError) => {
  let errors = [{title: 'Error', detail: 'Ooops something went wrong!!'}];

  if(resError && resError.data && resError.data.err) {
    errors = resError.data.err
  }
  return errors;
}


//Contact page
export const sendEmail = (contactData) =>  dispatch => {

  dispatch({type: 'IS_SENDING_EMAIL'});
  return accAxios.post(`/contact/sendEmail`, contactData);

  //send to reducer  
  // dispatch({
  //   type: 'SEND_EMAIL',
  //   contact: res.data
  // });
}

//Map
export const reloadMap = () => {
  return {
    type: 'RELOAD_MAP'
  }
}

export const reloadMapFinish = () => {
  return {
    type: 'RELOAD_MAP_FINISH'
  }
}


export * from './auth';
export * from './pages';
export * from './jobs'

