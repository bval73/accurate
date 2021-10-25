
import axios from 'axios';

export const extractApiErrors = (resError) => {
  let errors = [{title: 'Error', detail: 'Ooops womething went wrong!!'}];

  if(resError && resError.data && resError.data.err) {
    errors = resError.data.err
  }
  return errors;
}

//rental(s) function to return another function
export const fetchRentals = () => dispatch => {
  axios.get('/api/v1/rentals')
    .then(res => {
      const rentals = res.data;
      //send to reducer
      dispatch({
        type: 'FETCH_RENTALS',
        rentals
      });
    })
  }


export const fetchRentalById = rentalId => async dispatch => { 
  dispatch({type: 'IS_FETCHING_RENTAL'});
  const res = await axios.get(`/api/v1/rentals/${rentalId}`);
    //send to reducer
  dispatch({
    type: 'FETCH_RENTAL_BY_ID',
    rental: res.data
  });
}

// page by id / pagename
export const fetchPageById = pageName => async dispatch => {
// debugger;
  dispatch({type: 'IS_FETCHING_PAGE'});
  const res = await axios.get(`/api/v1/pages/${pageName}`);
    //send to reducer
  dispatch({
    type: 'FETCH_PAGE_BY_ID',
    pages: res.data
  });
}

//Contact page
export const sendContact = contactData => async dispatch => {
 // debugger
  dispatch({type: 'IS_SEND_EMAIL'});
  const res = await axios.get('/api/v1/contact}');
  console.log('Contact form data  ', JSON.stringify(contactData));
  dispatch({
    type: 'SEND_EMAIL',
    contact: res.data
  });
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

//AUTH ACTIONS
export const registerUser = (registerData) => {
  return axios
    .post('api/v1/users/register', registerData)
    .catch(err => {
      //send back to signUp in Register
      return Promise.reject(extractApiErrors(err.response || {})); 
    })
}

export const loginUser = (loginData) => {
  return axios
    .post('api/v1/users/login', loginData)
    .then(res => res.data)
    .catch(err => {
      //send back to signUp in login
      return Promise.reject(extractApiErrors(err.response || {})); 
    })
}

export const userAuthenticated = (decodedToken) => {
  return {
    type: 'USER_AUTHENTICATED',
    username:decodedToken.username || '',
    userType: decodedToken.userType || ''
  }
}

