
import React from 'react';

import { useForm } from 'react-hook-form';
// import { ErrorMessage } from '@hookform/error-message';
// import { Error } from 'helpers/functions';
import { EMAIL_PATTERN } from 'helpers/validators';

import FormError from './FormError';

const LoginForm = ({onSubmit}) => {
  
  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="acc-form">
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          {...register("email", 
            {
              required:'Email is required', 
              pattern: {value: EMAIL_PATTERN, 
              message: 'Invalid Email format!!'}
            }
          )} 
          type="email"
          className="form-control"
          id="email"
        />
 
        <FormError errors={errors} name="email">
          {(message) => <p>{message}</p>}
        </FormError>
      </div>
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input 
          {...register("password",
          {
            required:'Password is required', 
            minLength: {value:8, message:'Length of password must be a min of 8 characters!!!'}
          })} 
          type="password"
          className="form-control"
          id="password" 
        />
        <FormError errors={errors} name="password">
          {(message) => <p>{message}</p>}
        </FormError>
      </div>
      <button 
        type="submit"
        className="btn acc-btn btn-form">Submit
      </button>
    </form> 
  );
}

export default LoginForm;
