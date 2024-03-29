

import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { loginUser, userAuthenticated } from 'actions';
import { decodeJwt } from 'jose'
import moment from 'moment';

const { createContext, useContext } = React;

const AuthContext = createContext(null);

//children and dispatch from props
const AuthBaseProvider = ({children, dispatch}) => {

  const  checkAuthState = async() => {
    const decodedToken = await decodeToken(getToken());
    if(decodedToken && moment().isBefore(getExpiration(decodedToken))) {
      dispatch(userAuthenticated(decodedToken));
    }
  }

  const isAuthenticated = () => {
    const decodedToken = decodeToken(getToken());
    return decodedToken &&  isTokenValid(decodedToken);
  }

  const isTokenValid = (decodedToken) => {
    return decodeToken && moment().isBefore(getExpiration(decodedToken));
  }

  const getExpiration = (decodedToken) => {
    const newDt = new Date();

    if(moment.unix(decodedToken.exp) < newDt) {
      sessionStorage.removeItem('acc-token');
    }
    // return moment.unix(decodedToken.exp)>newDt
    return moment.unix(decodedToken.exp);
  }

  const getToken = () =>{
    return sessionStorage.getItem('acc-token');
  } 

  const decodeToken = (token) => {
    if(token && token !== '[object Object]'){
      try {
        const payload = decodeJwt(token);
        return payload;
      } catch (err) {
        sessionStorage.removeItem('acc-token');
        dispatch({type: 'LOG_OUT_USER'});
      }
    }else{
      return false;
    }
  }

  const logout = () => {
    sessionStorage.removeItem('acc-token');
    checkAuthState();
    dispatch({type: 'LOG_OUT_USER'});
    // return {shouldRedirect:true}
    // <Redirect to={{pathname: '/home'}} />
    // return <Redirect to={{pathname: '/login'}} />
  }

  const signIn = (loginData) => {
    return loginUser(loginData)
    .then(async (token) => {
      sessionStorage.setItem('acc-token', token);
      const decodedToken = await decodeToken(token);
      dispatch(userAuthenticated(decodedToken));
      return token;
    })
  }

  const authApi = {
    signIn,
    checkAuthState,
    logout,
    isAuthenticated
  }

  return (
    <div>
      <AuthContext.Provider value={authApi}>
        {children}
      </AuthContext.Provider>
    </div>
  );
}

export const AuthProvider = connect()(AuthBaseProvider);

//cannot use in class component
export const useAuth = () => {
  return useContext(AuthContext);
}

export const withAuth = Component => props => (
  <AuthContext.Consumer>
    {(authApi) => <Component {...props} auth={authApi} />}
  </AuthContext.Consumer>
)

