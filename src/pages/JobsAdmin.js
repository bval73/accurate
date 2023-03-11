
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {fetchAdminJob} from '../actions';
// import AccBtn from 'shared/AccBtn';

const JobsAdmin = (props) => {
  const { data, isFetching, dispatch } = props;

  const optionsValues = [
    {
      tech:'Bill Valentine',
      id:1
    },
    {
      tech:'Stefan Valentine',
      id:2
    },
    {
      tech:'Samantha Valentine',
      id:3
    },
    {
      tech:'Karen Valentine',
      id:4
    },
    {
      tech:'Will Valentine',
      id:5
    }
  ];

  useEffect(() => {
    dispatch(fetchAdminJob());
  }, [dispatch]);

  const renderOptions = (options,job) => {
    return(
      options.map((optionInput) => {
        return (
            <option key={job._id + optionInput.tech + '-' + optionInput.id} value={optionInput.tech}>{optionInput.tech}</option>
        ) 
      })
    )
  }

  const changeOption = (event) => {
    console.log('option has changed..',event.target.value)
    console.log('event.target..', event)
    event.value = event.target.value;
  }

  const renderJobs = (data) => {
    if(data) {
      return(
        data.map((job) =>
          <div className={`row admin-row `} id={job._id} key={job._id}>
            <div className='col-md-1 text-center'>{job.time}</div>
            <div className='col-md-1 text-center'>{job.day}</div>
            <div className='col-md-1 text-center'>{job.date}</div>
            <div className='col-md-1 text-center'>{job.jobType}</div>
            <div className='col-md-2 text-center'>{job.assignedTech}</div>
            <div className='col-md-2 text-center'>{job.streetAddress}</div>
            <div className='col-md-2 text-center'>{job.city}</div>
            <div className='col-md-2 text-center'>
              <select onChange={changeOption} value={job.assignedTech}>
                <option key="choose" value='Choose a tech'>Choose a tech</option>
                {
                  renderOptions(optionsValues,job)
                }
              </select>
            </div>
          </div>
        )
      )
    }
  }
  
  if(isFetching){return null;}

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
        <div className='col-md-2 text-center'>Assign</div>
      </div>
      {
        renderJobs(data)
      }
    </div>
  );
}

const mapStateToProps = ({job}) => {
  return {
    data: job.item,
    isFetching: job.isFetching
  }
}

export default connect(mapStateToProps)(JobsAdmin);
