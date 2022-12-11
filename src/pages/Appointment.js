
import React, { Component } from 'react';
import { connect } from 'react-redux';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import moment from 'moment';
// import jwt from 'jsonwebtoken';
import * as jose from 'jose';
import { Redirect } from 'react-router-dom';
import { createJob, sendApptEmail } from '../actions';

class Appointment extends Component {

  constructor() {
    super();
    this.state = {
      proposedAppointment: {
        date: null,
        time: null,
        day: null,
        startTime: null,
        jobType: 'quote',
        owner: null
      },
      shouldRedirect: false,
      error: null,
      message: null,
      secret: process.env.SECRET
    }
  }

  getToken = () =>{
    return sessionStorage.getItem('acc-token');
  } 

  decodeToken = async token => {
    // const decoded = jwt.decode(token);
    const secret = new TextEncoder().encode('cc7e0d44fd473002f1c42167459001140ec6389b7353f8088f4d9a95f2f596f2');
    const { payload, protectedHeader } = await jose.jwtVerify(token, secret, {
      issuer: 'http://localhost:3000',
      audience: 'public'
    });
    
    return payload.userId;
  }

  handleApply = (event, {startDate}) => {
    if(this.getToken()) {
      const id = this.decodeToken(this.getToken());
      this.setState({
        proposedAppointment: {
          ...this.state.proposedAppointment,
          time: moment(startDate).format("hh:mm a"),
          date: moment(startDate).format("MM-DD-YYYY"),
          day: moment(startDate).format("dddd"),
          startTime: startDate,
          owner: id
        }
      })
    } else {
      this.setState({shouldRedirect: true});
      return null;
    }
    
    createJob(this.state.proposedAppointment)
      .then((createdJob) => {
        this.setState({
          message: 'Your FREE QUOTE request has been sent, we will contact you either to confirm or let you know if there is a schedule conflict.'});

          this.props.dispatch(sendApptEmail(createdJob));
      })
      .catch(err => {
       console.log('create job err', err);
        this.setState({error: err})
      })
  }

  checkInvalidDates = (date) => {
    return date < moment().add(+0, 'days');
  };

  render() {
    document.title = 'Make an appointment with Accurate Powerwash for your free quote.';
    const { shouldRedirect, error, message} = this.state;
    const isAuth = this.props.isAuth;

    if(shouldRedirect) {
      return <Redirect to={{pathname: '/login', state:{message: 'You need to be logged in to set an appointment.', backPage: 'appointment'}}} /> 
    }

    return (
      <div className="row">
        <h1>Make an Appointment for your free quote.</h1>
        <div className="col-md-6">
          <p>
            If you have an account and are logged in you can use the online appointment setter to the right or you can email us at <a href="mailto:appointments@accuratesoftwash.com">appointments@accuratesoftwash.com</a>  or through our <a href='/contact'>contact page</a>
            </p>
            <p>
            After setting up your quote appointment with us you will receive an email confirming your day and time of choice. If there is a conflict with scheduling we will notify you of this and set up a new time that is conveient for you. 
          </p>
          <p>
            If you prefer the phone give us a call at <a href="tel:8135551212">813-555-1212</a> 
          </p>
        </div>
        <div className="col-md-6">
          <div className='form-group'>
            {!isAuth &&
            <p>
              You need to be <a href="/login">logged in</a>, in order to set up an appointment.
            </p>
            }
            <label htmlFor='dates'>Appointment Date / Time</label>
            
            <DateRangePicker
                onApply={this.handleApply}
                initialSettings={{
                  timePicker: true,
                  drops: 'auto',  
                  singleDatePicker: true,
                  opens: 'center',
                  containerStyles:{display: 'block'},
                  isInvalidDate: this.checkInvalidDates,
                  startDate: moment().add(1,'days').startOf('hour').toDate(),
                  locale: {
                    format: 'MM-DD-YYYY hh:mm A',
                  },
                }}
              >
              <input
                id='dates'
                type='text'
                className='form-control'
              />
            </DateRangePicker>
            {
              message &&
                <div className='alert alert-success'>{message} </div>
            }
            {
              error &&
                <div className='alert alert-danger'>{error}</div>
            }

          </div>  
        </div>
      </div>
    );
  }
}

//export default Appointment;

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    proposedAppointment: state.proposedAppointment
  }
}

export default connect(mapStateToProps)(Appointment);
