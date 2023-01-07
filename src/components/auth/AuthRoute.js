
// Protected routes for all intent purposes

import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../providers/AuthProvider';

/*
  when going to PageNew it always redirects to login if the exp date is good or not. Need to fix this.......
*/
const AuthRoute = ({children, ...rest}) => {
  debugger
  const authService = useAuth();
  const onlyChild = React.Children.only(children);
  return (
    <Route {...rest} render={(props) => authService.isAuthenticated() ?
       React.cloneElement(onlyChild, {...rest, ...props}) : 
       <Redirect to={{pathname: '/login'}} />  } />
  )
}

export default AuthRoute; 
