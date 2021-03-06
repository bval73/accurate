
import React from 'react';

export const TextArea = ({
  input,
  label,
  type,
  rows,
  className,
  meta: { touched, error, warning }
}) => (
  <div className='form-group'>
    <label>{label}</label>
    <div className='input-name'>
      <textarea {...input} type={type} rows={rows} className={className} > </textarea>
    </div>
      {touched &&
        ((error && <div className='alert alert-danger'>{error}</div>))}
  </div>
)