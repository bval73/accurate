

import React from 'react';
import { connect } from 'react-redux';
import { loginUser, userAuthenticated } from 'actions';
import jwt from 'jsonwebtoken';
import moment from 'moment';

const { createContext, useContext } = React;

const AuthContext = createContext(null);

//childrem anf disparch from props
const AuthBaseProvider = ({children, dispatch}) => { 

  const  checkAuthState = () => {
    const decodedToken = decodeToken(getToken());
    if(decodedToken && moment().isBefore(getExpiration(decodedToken))) {
      dispatch(userAuthenticated(decodedToken));
    }
  }

  const isAuthenticated = () => {
    const decodedToken = decodeToken(getToken());
    return decodedToken && isTokenValid(decodedToken)
  }

  const isTokenValid = (decodedToken) => {
    return decodeToken && moment().isBefore(getExpiration(decodedToken));
  }

  const getExpiration = (decodedToken) => {
    return moment.unix(decodedToken.exp);
  }

  const getToken = () =>{
    return sessionStorage.getItem('acc-token');
  } 

  const decodeToken = token => {
    const decoded = jwt.decode(token);
    console.log(decoded)
    return decoded;
  }

  const logout = () => {
    sessionStorage.removeItem('acc-token');
    dispatch({type: 'LOG_OUT_USER'});
  }

  const signIn = (loginData) => {
    return loginUser(loginData)
    .then((token) => {
      sessionStorage.setItem('acc-token', token);
      const decodedToken = decodeToken(token);
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

