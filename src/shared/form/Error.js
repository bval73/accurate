import React from 'react';

export function Errors(props) {
  const errors = props.errors;
//  debugger

  return(
    errors.length > 0 &&
      <div className='alert alert-danger bwm-errors'>
        {errors.map((error, index) => <p key={index}> {error.detail} </p>)}
      </div>
  )
}
