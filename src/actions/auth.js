
import axiosService from '../services/AxiosService';
import { extractApiErrors } from './index';
const { accAxios } = axiosService;

//AUTH ACTIONS
export const registerUser = (registerData) => {
  return accAxios
    .post('/users/register', registerData)
    .catch(err => {
      //send back to signUp in Register
      return Promise.reject(extractApiErrors(err.response || {})); 
    })
}

export const loginUser = (loginData) => {
  console.log("loginData is ",loginData);
  return accAxios
    .post('/users/login', loginData)
    .then(res => res.data)
    .catch(err => {
      //send back to login
      return Promise.reject(extractApiErrors(err.response || {})); 
    })
}

export const createJob = job => {
  const token = sessionStorage.getItem('acc-token');
//avoid 401 page error  
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  return accAxios.post('/jobs', job, config);
}

export const userAuthenticated = (decodedToken) => {
  return {
    type: 'USER_AUTHENTICATED',
    username:decodedToken.username || '',
    usertype: decodedToken.usertype || ''
  }
}