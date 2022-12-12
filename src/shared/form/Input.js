import React from 'react';
import { useForm } from 'react-hook-form';

export const Input = (...props) => {
  const {input,
    label,
    type,
    className,
    describedby,
    autofocus,
    name,
    divClass} = props;

    const { 
      register, 
      formState: { errors }
    } = useForm();

  return (
    <div className={divClass}>
      <label htmlFor={name}>{label}</label>
      <input 
        {...register({name}, {required:true})} 
        type={type}
        className={className}
        id={name}
        {...autofocus}
      />
      {errors.fname &&
        <div className="alert alert-danger">
          {errors.fname.type === 'required' &&
            <span>First name is Required!!</span>
          }
        </div>
      }
    </div>
  );
}

//export default Input;
