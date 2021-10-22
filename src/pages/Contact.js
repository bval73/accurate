import React, { Component } from 'react';

//import * as actions from 'actions/indexOld';
//import connect from '../store/connectOld';
import { connect } from 'react-redux';

import ContactForm from 'components/form/ContactForm';
import { sendContact } from 'actions';

class Contact extends Component {

  contactSubmit = (contactData) => {
    debugger
    sendContact(contactData);
  }

  render() {
    document.title = 'Contact Accurate Powerwash for your free quote.';
//    const { user, isAuth, errors } = this.props;
    return (
       <section className='row'>
          <ContactForm onSubmit={this.contactSubmit} />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contactData: state
  }
}

export default connect(mapStateToProps)(Contact);



