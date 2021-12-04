
import React, { Component } from 'react';

//import * as actions from 'actions/indexOld';
//import connect from '../store/connectOld';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import ContactForm from 'components/form/ContactForm';
import { sendEmail } from 'actions';
import ApiErrors from 'components/form/ApiErrors';

class Contact extends Component {

  state = {
    shouldRedirect: false,
    errors: [],
    modalMessage: {}
  }

  contactSubmit = (contactData) => {
    this.setState({contactData});
    this.props.dispatch(sendEmail(contactData));
//    this.setState({shouldRedirect: true});
    this.setState({
      modalMessage: {
        messageText:'Thank you for your inquiry. We will respond within 24 hours if the comment requires one'
      }
    })
    window.scrollTo(0, 0)
  }

  render() {
    document.title = 'Contact Accurate Powerwash for your free quote.';
    const { shouldRedirect, errors, modalMessage:{messageText} } = this.state;

    if(shouldRedirect) {
      return <Redirect to={{pathname: '/Thankyou', state:{message: 'You have been succesfuly registered.'}}} /> //Need to have modal pop up instead of going to thankyou page.
    }
//    const { user, isAuth, errors } = this.props;
    return (
       <div className="row">
         <h1>Send us a message</h1>
         {messageText &&
          <div className='alert alert-success' ref='message'>
            {messageText}
          </div>
         }
         {console.log('the state is ',this.state)}

          <ContactForm onSubmit={this.contactSubmit} />
          <ApiErrors errors={errors}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contactData: state
  }
}

export default connect(mapStateToProps)(Contact);

