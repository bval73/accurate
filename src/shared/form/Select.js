
import React from 'react';

export const Select = ({
  input,
  label,
  options,
  className,
  meta: { touched, error, warning }
}) => {
  function renderOptions() {
    return options.map((option, index) =>{
      return <option key={index} value={option}> {option} </option>
    });
  }
  
  return(
    <div className='form-group'>
      <label>{label}</label>
      <div className='input-name'>
        <select {...input} className={className} >
          {renderOptions()}
        </select>
      </div>
        {touched &&
          ((error && <div className='alert alert-danger'>{error}</div>))}
    </div>
  )
}

{/* <Field
  options={options}
  name="category"
  label="Category"
  className="form-control"
  component={Select}
/> */}
