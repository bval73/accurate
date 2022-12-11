
import React from 'react';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { EMAIL_PATTERN } from 'helpers/validators';
import { Error } from 'helpers/functions';
// import FormError from './FormError';


const RegisterForm = ({onSubmit}) => {

  const {
    register, 
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="acc-form">
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input 
          {...register("username", {required:'User name is required'})} 
          type="text"
          className="form-control"
          id="username" 
          autoFocus
        />
        <ErrorMessage as={<Error />} errors={errors} name="username" >
          {({message}) => <p>{message}</p>}
        </ErrorMessage>  
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input 
          type="email"
          className="form-control"
          id="email" 
          {...register("email", 
            {
              required:'Email is required', 
              pattern: {value: EMAIL_PATTERN, message: 'Invalid Email format!!'}
            }
          )} 
        />
          <ErrorMessage as={<Error />} errors={errors} name="email" >
            {({message}) => <p>{message}</p>}
          </ErrorMessage> 
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
        <ErrorMessage as={<Error />} errors={errors} name="password" >
          {({message}) => <p>{message}</p>}
        </ErrorMessage> 
      </div>

      <div className="form-group">
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input 
          type="password"
          className="form-control"
          id="passwordConfirmation" 
          {...register("passwordConfirmation",
            {
              required:"Password confirmation is required", 
              minLength: {value:8, message:'Length of password confirmation must be a min of 8 characters!!!'},
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || 'Password confirmation has to be the same as password!';
                },
              },
            }
          )}
        />
        { errors.passwordConfirmation &&
          <div className="alert alert-danger"> 
            {errors.passwordConfirmation && (
             errors.passwordConfirmation.message
        )}
          </div>
        }
      </div> 
      <div className="form-group">
        <label htmlFor="notify">Receive Notifications</label>
        <input 
          type='checkBox' 
          name='notify' 
          id='notify'
          {...register("notify")}
        />
      </div>
      <button 
        type="submit"
        className="btn acc-btn btn-form">Submit
      </button>
    </form>
  );
}

export default RegisterForm;

