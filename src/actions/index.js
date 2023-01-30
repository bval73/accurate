
import axiosService from '../services/AxiosService';
import { LOG_OUT_USER } from './types';
import authService from 'services/auth-service';

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

export const logout = () => {
  authService.invalidateUser();
  return{
    type: LOG_OUT_USER
  } 
}

export * from './auth';
export * from './pages';
export * from './jobs';
export * from './types';

