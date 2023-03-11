
import React, { useEffect,useState} from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {fetchTechJob} from '../actions';

const JobsTech = (props,errors) => {
  const { data, isFetching } = props;
  let shouldRedirect = false;

  const getToken = () =>{
    return sessionStorage.getItem('acc-token');
  } 

  if(!getToken()) {
    shouldRedirect = true;
  }

  useEffect(() => {
    props.dispatch(fetchTechJob());
  }, [props]);

  const handleComplete = (event) => {
    console.log('check box click ',event.target.value)
  }

  const renderJobs = (data) => {
      if(data) {
      return(
        data.map((job,index) =>
          <div className={`row admin-row `} id={job._id} key={job._id}>
            <div className='col-md-1 text-center'>{job.time}</div>
            <div className='col-md-1 text-center'>{job.day}</div>
            <div className='col-md-1 text-center'>{job.date}</div>
            <div className='col-md-1 text-center'>{job.jobType}</div>
            <div className='col-md-2 text-center'>{job.assignedTech}</div>
            <div className='col-md-2 text-center'>{job.streetAddress}</div>
            <div className='col-md-2 text-center'>{job.city}</div>
            <div className='col-md-2 text-center'>
            <input type="checkbox" id={`${job._id}_complete`} name={`${job._id}_complete`} value={job._id} onClick={handleComplete} />
            </div>
          </div>
        )
      )
    }
  }

  if(isFetching){return null;}
  if(shouldRedirect) {
    return <Redirect to={{pathname: '/login', state:{message: 'You need to be logged in.', backPage: 'job/tech'}}} /> 
  }

  return (
    <div className='admin-table'>
      <div className='row admin-table-header'>
        <div className='col-md-1 text-center'>Time</div>
        <div className='col-md-1 text-center'>Day</div>
        <div className='col-md-1 text-center'>Date</div>
        <div className='col-md-1 text-center'>Job Type</div>
        <div className='col-md-2 text-center'>Assigned Tech</div>
        <div className='col-md-2 text-center'>Street</div>
        <div className='col-md-2 text-center'>City</div>
        <div className='col-md-2 text-center'>Complete</div>
      </div>
      {
        renderJobs(data)
      }
    </div>
  );
};

const mapStateToProps = ({job}) => {
  return {
    data: job.item,
    isFetching: job.isFetching,
    // _isValid
  }
}

export default connect(mapStateToProps)(JobsTech);
