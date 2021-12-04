import React, { Component } from 'react';
//import store from '../store'; //fake DB

//import { StateContext} from '../state-context';

//import { connect } from 'react-redux';

//import connect from '../store/connect';

import LoginForm from 'components/form/LoginForm';
import ApiErrors from 'components/form/ApiErrors';
//import { loginUser } from 'actions';
import { withAuth } from 'providers/AuthProvider'; //HOC

import { Redirect } from 'react-router-dom';

class Login extends Component {
  
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      errors: []
    }
  }
  
  

  signIn = (loginData) => {
    this.props.auth.signIn(loginData)
    .then((token) => {
      this.setState({token, shouldRedirect: true});
    })
    .catch(err => {
      this.setState({errors: err})
    })
  }

  render() {
    document.title = 'Login to Accurate Powerwash to access your account and updates.';
    const { errors, shouldRedirect} = this.state;
    //coming from the register page..
    const { message } = this.props.location.state || '';
    const { backPage } = this.props.location.state || '/';

    if(shouldRedirect) {
      return <Redirect to={{pathname: backPage}} />
    }
    return (
      <div className="acc-form">
        <div className="row">
          <div className="col-md-5">
            <h1 className="page-title">Login</h1>
            {message &&
              <div className="alert alert-success">
                {message}
              </div>
            }
            <LoginForm onSubmit={this.signIn} />
            <ApiErrors errors={errors}/>
          </div>
          <div className="col-md-6 ml-auto">
            <div className="image-container">
              <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
              <img src="/images/login-image.jpg" alt="Login an user" />
            </div>
          </div>
        </div>
      </div> 
    );
  }
}

//Login.contextType = StateContext;
// will need to change to user for the correct information


export default withAuth(Login);
//export default connect()(withAuth(Login));
