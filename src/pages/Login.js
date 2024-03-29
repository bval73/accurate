
import React, { Component } from 'react';
import LoginForm from 'components/form/LoginForm';
import ApiErrors from 'components/form/ApiErrors';
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
    });
  }

  render() {
    document.title = 'Login to Accurate Powerwash to access your account and updates.';
    const { errors, shouldRedirect} = this.state;
    const { message } = this.props.location.state || '';
    const { backPage } = this.props.location.state || '/';

    if(shouldRedirect) {
      return <Redirect to={{pathname: backPage}} />
    }

    return (
      <div className="acc-form">
        <div className="row">
          <div className="col-md-6">
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

export default withAuth(Login);

