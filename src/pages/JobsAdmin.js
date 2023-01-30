
import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import {fetchAdminJob,fetchJob} from '../actions';
// import AccBtn from 'shared/AccBtn';

const JobsAdmin = (props) => {
  const { data, isFetching } = props;
  const optionsValues = [
    {
      name:'Bill Valentine',
      id:1
    },
    {
      name:'Stefan Valentine',
      id:2
    },
    {
      name:'Samantha Valentine',
      id:3
    },
    {
      name:'Karen Valentine',
      id:4
    },
    {
      name:'Will Valentine',
      id:5
    }
  ];

  useEffect(() => {
    // props.dispatch(fetchJob());
    props.dispatch(fetchAdminJob());
  }, []);

  const renderOptions = (options) => {
    return(
      options.map((optionInput) => 
        <option key={optionInput.id} value={optionInput.id}>
          {optionInput.name}
        </option>
      )
    )
  }

  const changeOption = (event) => {
    console.log('option has changed..',event.target.value)
  }

  const renderJobs = (data) => {
    if(data) {
      return(
        data.map((job,index) =>
          <div className={`row admin-row `} id={index} key={job._id}>
            <div className='col-md-1 text-center'>{job.time}</div>
            <div className='col-md-1 text-center'>{job.day}</div>
            <div className='col-md-1 text-center'>{job.date}</div>
            <div className='col-md-1 text-center'>{job.jobType}</div>
            <div className='col-md-2 text-center'>{job.assignedTech}</div>
            <div className='col-md-2 text-center'>{job.streetAddress}</div>
            <div className='col-md-2 text-center'>{job.city}</div>
            <div className='col-md-2 text-center'>
              <select onChange={changeOption}>
                {
                  renderOptions(optionsValues)
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
        renderJobs(data[0])
      }
    </div>
  );
}

// export default JobsAdmin;

const mapStateToProps = ({job}) => {
  return {
    data: job.item,
    isFetching: job.isFetching
  }
}

export default connect(mapStateToProps)(JobsAdmin);
