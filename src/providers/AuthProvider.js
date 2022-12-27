

import React from 'react';
import { connect } from 'react-redux';
//import { Redirect } from 'react-router-dom';
import { loginUser, userAuthenticated } from 'actions';
import * as jose from 'jose';
import moment from 'moment';

const { createContext, useContext } = React;

const AuthContext = createContext(null);

// const secret = process.env.SECRET;
// const secret = new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2');
const secret = new TextEncoder().encode(process.env.REACT_APP_TOMTOM_API_KEY);
//children and dispatch from props
const AuthBaseProvider = ({children, dispatch}) => { 

  const  checkAuthState = async () => {
    const decodedToken = await decodeToken(getToken());
    
    if(decodedToken && moment().isBefore(getExpiration(decodedToken))) {
      dispatch(userAuthenticated(decodedToken));
    }
  }

  const isAuthenticated = () => {
    const decodedToken = decodeToken(getToken());
    console.log('isAuthenticated ',isTokenValid(decodedToken));
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

  const decodeToken = async token => {
    // if(token && token !== '[object Object]'){
      try {
        const { payload } = await jose.jwtVerify(token, secret, {
          issuer: 'http://localhost:3000',
          audience: 'public'
        })
        
        return payload;

      } catch (err) {
        // this.logout();
        sessionStorage.removeItem('acc-token');
        dispatch({type: 'LOG_OUT_USER'});
      }
    // }else{
    //   return null;
    // }
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

