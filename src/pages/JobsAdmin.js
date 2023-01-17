
import React, { useEffect,useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import {fetchJob} from '../actions';

const JobsAdmin = (props) => {
  const { data, isFetching   } = props;
  const [reLoad, setReload] = useState(0);

console.log('data is ',data);
  useEffect(() => {
    props.dispatch(fetchJob());
  }, []);

  const renderJobs = (jobs) => 
    jobs.map(job => 
      <div className='row' key={job._id}>
        <div className='col-md-1 text-center'>{job.time}</div>
        <div className='col-md-1 text-center'>{job.day}</div>
        <div className='col-md-1 text-center'>{job.date}</div>
        <div className='col-md-1 text-center'>{job.jobType}</div>
        <div className='col-md-2 text-center'>{job.assignedTech}</div>
        <div className='col-md-2 text-center'>{job.streetAddress}</div>
        <div className='col-md-3 text-center'>{job.city}</div>
      </div>
    );
  
  // const { data, isFetching   } = props;
console.log('isFetching ',isFetching,data)
  if(isFetching){return null;}

  return (
    <div>
      <div className='row'>
        <div className='col-md-1 text-center'>Time</div>
        <div className='col-md-1 text-center'>Day</div>
        <div className='col-md-1 text-center'>Date</div>
        <div className='col-md-1 text-center'>Job Type</div>
        <div className='col-md-2 text-center'>Assigned Tech</div>
        <div className='col-md-2 text-center'>Street</div>
        <div className='col-md-3 text-center'>City</div>
      </div>
      {
        renderJobs(data)
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

// const JobDetailWithRouter = withRouter(JobsAdmin);

export default connect(mapStateToProps)(JobsAdmin);

// export default connect(mapStateToProps)(JobDetailWithRouter);

