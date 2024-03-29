
import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    this.setState({
      modalMessage: {
        messageText:'Thank you for your inquiry. We will respond within 24 hours if the comment requires one'
      }
    })
    window.scrollTo(0, 0)
  }

  render() {
    document.title = 'Contact Accurate Powerwash for your free quote.';
    const { errors, modalMessage:{messageText} } = this.state;

//    const { user, isAuth, errors } = this.props;
    return (
       <div className="row">
         <h1>Send us a message</h1>
         {messageText &&
          <div className='alert alert-success' ref='message'>
            {messageText}
          </div>
         }

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

