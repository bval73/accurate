
import React, { Component } from 'react';

import { connect } from 'react-redux';
import RegisterForm from 'components/form/RegisterForm';
import ApiErrors from 'components/form/ApiErrors';

import { registerUser } from 'actions';
import { Redirect } from 'react-router-dom';

class Register extends Component {

  state = {
    shouldRedirect: false,
    errors: []
  }

  signUp = (registerData) => {
    registerUser(registerData)
      .then((res, err) => {
        this.setState({shouldRedirect: true})
      })
      .catch(err => {
        this.setState({errors: err})
      })
  }

  render() {
    document.title = 'Register with Accurate Powerwash for updates and discounts.';
    const { shouldRedirect, errors } = this.state;
    if(shouldRedirect) {
      return <Redirect to={{pathname: '/login', state:{message: 'You have been succesfuly registered.'}}} /> //shows the message on the login page.
    }
    return (
      <div className="acc-form">
        <div className="row">
          <div className="col-md-5">
            <h1 className="page-title">Register</h1>
            <RegisterForm onSubmit={this.signUp} />
            <ApiErrors errors={errors}/>
          </div>
          <div className="col-md-6 ml-auto">
            <div className="image-container">
              <h2 className="catchphrase">As our member you have access to most awesome places in the world.</h2>
              <img src="/images/register-image.jpg" alt="Register an user" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.register
  }
}

export default connect(mapStateToProps)(Register);

