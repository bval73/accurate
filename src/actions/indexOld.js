import axios from 'axios';
import authService from 'services/auth-service';
import axiosService from 'services/AxiosService';

import { FETCH_RENTAL_BY_ID_SUCCESS, 
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTALS_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_SUCCESS, 
  FETCH_RENTALS_INIT,
  FETCH_RENTALS_FAIL,
  LOGOUT,
  FETCH_USER_BOOKINGS_INIT,
  FETCH_USER_BOOKINGS_SUCCESS,
  FETCH_USER_BOOKINGS_FAIL,
  UPDATE_RENTAL_SUCCESS,
  UPDATE_RENTAL_FAIL,
  RESET_RENTAL_ERRORS,
  RELOAD_MAP,
  RELOAD_MAP_FINISH,
  UPDATE_BOOKINGS} from './types';

  export const verifyRentalOwner = (rentalId) => {
    return accAxios.get(`/rentals/${rentalId}/verify-user`)
  }

  export const reloadMap = () => {
    return {
      type: RELOAD_MAP
    }
  }

  export const reloadMapFinish = () => {
    return {
      type: RELOAD_MAP_FINISH
    }
  }

//Rental Actions --------------------------------------------

const axiosInstance = axiosService.getInstance();

const fetchRentalByIdInit = () =>{
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  }
}

const fetchRentalByIdSuccess = (rental) => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    // could also say rental: rental below because key names inside of object 
    // are the same
    rental
  }
}

const fetchRentalSuccess = (rentals) => {
  return{
    type: FETCH_RENTALS_SUCCESS,
    rentals
  }
}

const fetchRentalsInit = () => {
  return {
    type: FETCH_RENTALS_INIT
  }
}

const fetchRentalsFail = (errors) => {
  return {
    type:FETCH_RENTALS_FAIL,
    errors
  }
}

export const fetchRentals = (city) => {
  const url = city ? `/rentals?city=${city}` : '/rentals';

  return dispatch => {
    dispatch(fetchRentalsInit());
      axiosInstance.get(url)
        .then(res => res.data )
        .then(rentals => dispatch(fetchRentalSuccess(rentals)))
        .catch(({response}) => dispatch(fetchRentalsFail(response.data.errors)))
  }
}

export const fetchRentalById = (rentalId) => {
  // uses redux.thunk
  return function(dispatch){
    dispatch(fetchRentalByIdInit());
    // iterate through rentals to find selected rental
    return axios.get(`/api/v1/rentals/${rentalId}`)
    .then(res => res.data)  
    .then(rental => {
      dispatch(fetchRentalByIdSuccess(rental));
      return rental;
    });
  }
}

export const createRental = (rentalData) => {
  return axiosInstance.post('/rentals', rentalData).then(
    res => res.data, // wont need all brackets, curly braces when 1 liner
    err => Promise.reject(err.response.data.errors)
  )
}

export const resetRentalErrors = () => {

  return {
    type: RESET_RENTAL_ERRORS
  }
}

const updateRentalSuccess = (updatedRental) => {
  return{
    type: UPDATE_RENTAL_SUCCESS,
    rental: updatedRental
  }
}

const updateRentalFail = (errors) => {
  return{
    type: UPDATE_RENTAL_FAIL,
    errors
  }
}

export const updateRental = (id, rentalData) => dispatch => {
  return axiosInstance.patch(`/rentals/${id}`, rentalData)
    .then(res => res.data)
    .then(updatedRental => {
      dispatch(updateRentalSuccess(updatedRental));

      if(rentalData.city || rentalData.street) {
        dispatch(reloadMap()); // when map updates due to update page..
      }
    })
    .catch(({response}) => dispatch(updateRentalFail(response.data.errors)))
}

// User Bookings Actions -----------------------------------------------

const fetchUserBookingsSuccess = (userBookings) => {
  return{
    type: FETCH_USER_BOOKINGS_SUCCESS,
    userBookings
  }
}

const fetchUserBookingsInit = () => {
  return {
    type: FETCH_USER_BOOKINGS_INIT
  }
}

const fetchUserBookingsFail = (errors) => {
  return {
    type:FETCH_USER_BOOKINGS_FAIL,
    errors
  }
}

export const updateBookings = (bookings) => {
  return {
    type:UPDATE_BOOKINGS,
    bookings
  }
}

export const fetchUserBookings = (userBookings) => {
  // uses redux.thunk
  return function(dispatch){
    dispatch(fetchUserBookingsInit());
    // iterate through rentals to find selected user
    axiosInstance.get('bookings/manage')
      .then(res => res.data )
      .then(userBookings => dispatch(fetchUserBookingsSuccess(userBookings)))
      .catch((response) => {
        console.log(response)
        dispatch(fetchUserBookingsFail(response))  
      })
/*      .catch(({response}) => 
      console.log(response)  
      dispatch(fetchUserBookingsFail(response.data.errors))) */
  }
}

// User Rentals Actions -----------------------------------------------

export const getUserRentals = () => {
  return axiosInstance.get('/rentals/manage').then(
    res => res.data, // wont need all brackets, curly braces when 1 liner
    err => Promise.reject(err.response.data.errors)
  )
}

export const deleteRental = (rentalId) => {
  return axiosInstance.delete(`/rentals/${rentalId}`).then(
    res => res.data, // wont need all brackets, curly braces when 1 liner
    err => Promise.reject(err.response.data.errors)
  )
}


// Auth Actions --------------------------------------------

export const register = (userData) => {
  return axios.post('/api/v1/users/register', userData).then(
    res => res.data, // wont need all brackets, curly braces when 1 liner
    err => Promise.reject(err.response.data.errors)
  )
}

const loginSuccess = () => {
  const username = authService.getUsername();
  const usertype = authService.getUsertype();
  return {
    type: LOGIN_SUCCESS,
    username,
    usertype
  }
}

const loginFailure = (errors) => {
  return {
    type: LOGIN_FAILURE,
    errors
  }
}

export const checkAuthState = () => {
  return dispatch => {
    if(authService.isAuthenticated()) {
      dispatch(loginSuccess());
    }
  }
}

export const login = (userData) => {
  return dispatch => {
    return axios.post('/api/v1/users/auth', userData)
      .then(res => res.data)
      .then(token => {
        authService.saveToken(token)
        dispatch(loginSuccess());
        //redirect to rentals page
      })
      .catch(({response}) => {
        dispatch(loginFailure(response.data.errors));
      })
  }
}

export const logout = () => {
  authService.invalidateUser();
  return{
    type: LOGOUT
  } 
}

// Bookings---------------------------------------------------------
export const createBooking = (booking) => {
  return axiosInstance.post('/bookings', booking)
        .then(res => res.data)
        .catch(({response}) => Promise.reject(response.data.errors));
}

// Image upload------------------------------------------
export const uploadImage = image => {

  const formData = new FormData();
  formData.append('image' , image); //need same key as in routes/image-upload.js

  return axiosInstance.post('/image-upload', formData)
    .then(json => {
      return json.data.imageUrl;
    })
    .catch(({response}) => Promise.reject(response.data.errors[0]))

}

// Payment----------------------------------------------------------------
export const getPendingPayments = () => {
  return axiosInstance.get('/payments')
    .then(res => res.data)
    .catch(({response}) => Promise.reject(response.data.errors))
}

export const acceptPayment = (payment) => {
  debugger;
  return axiosInstance.post('/payments/accept', payment)
    .then(res => res.data)
    .catch(({response}) => Promise.reject(response.data.errors))
}

export const declinePayment = (payment) => {
  return axiosInstance.post('/payments/decline', payment)
    .then(res => res.data)
    .catch(({response}) => Promise.reject(response.data.errors))
}

// REVIEW FEATURE HERE-----------------------------------------------

export const createReview = (reviewData, bookingId) => {
  return axiosInstance.post(`/reviews?bookingId=${bookingId}`, reviewData)
                      .then(res => res.data)
                      .catch(({response}) => Promise.reject(response.data.errors))
}

//get reviews to show on detail page of property
export const getReviews = (rentalId) => {
  return axiosInstance.get(`/reviews?rentalId=${rentalId}`)
    .then(res => res.data)
    .catch(({response}) => Promise.reject(response.data.errors))
}

