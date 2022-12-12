import React from 'react';
// eslint-disable-next-line

//Input is throwing error
//'Input' is not exported from 'shared/form/Input'.
//Need to fix it
// import { Input } from 'shared/form/Input';

//import { TextArea } from 'shared/form/TextArea';

//import { Field, reduxForm } from 'redux-form';

import { useForm } from 'react-hook-form';

import { EMAIL_PATTERN } from 'helpers/validators';

//import AccModal from 'shared/Modal';
import TomMap from 'components/map/TomMap';

const ContactForm = ({onSubmit}) => {
  const { 
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm();

  const location = () => {
//    const { rental:{ street, city, state }} = this.props;
    const info = {
      street: 'lynan farms dr.',
      city: 'dade city',
      state: 'fl'
    }
    return info.street && info.city && info.state + "," + info.city + ',' + info.street;
  }

  return (
    <>
    <section className='col-md-6'>
      <form onSubmit={handleSubmit(onSubmit)} className='acc-form'>
        <div className="form-group row">
          <div className="col-md-6 col-sm-6">
            <label htmlFor="fname">First Name</label>
            <input 
              {...register("fname", {required:true})} 
              type="text"
              className="form-control"
              id="fname"
              autoFocus
            />
            {errors.fname &&
              <div className="alert alert-danger">
                {errors.fname.type === 'required' &&
                  <span>First name is Required!!</span>
                }
              </div>
            }
          </div>
          <div className="col-md-6 col-sm-6">
            <label htmlFor="lname">Last Name</label>
              <input 
              {...register("lname", {required:true})} 
              type="text"
              className="form-control"
              id="lname"
            />
            {errors.lname &&
              <div className="alert alert-danger">
                {errors.lname.type === 'required' &&
                  <span>Last name is Required!!</span>
                }
              </div>
            }
          </div>
        </div>
        <div className="form-group row">
          <div className="col-md-6 col-sm-6">
            <label htmlFor="street">Street</label>
            <input 
              {...register("street", {required:true, minLength: 8})} 
              type="text"
              className="form-control"
              id="street"
            />
            {errors.street &&
              <div className="alert alert-danger">
                {errors.street.type === 'required' &&
                  <span>Street is Required!!</span>
                }
                {errors.street.type === 'minLength' &&
                  <span>Length of street must be a min of 8 characters!!!</span>
                }
              </div>
            }
            </div>
            <div className="col-md-6 col-sm-6">
              <label htmlFor="city">City</label>
              <input 
                {...register("city", {required:true, minLength: 8})} 
                type="text"
                className="form-control"
                id="city"
              />
              {errors.street &&
                <div className="alert alert-danger">
                  {errors.city.type === 'required' &&
                    <span>City is Required!!</span>
                  }
                  {errors.city.type === 'minLength' &&
                    <span>Length of City must be a min of 8 characters!!!</span>
                  }
                </div>
              }
            </div>
          </div>
          <div className="form-group row">
          <div className="col-md-6 col-sm-6">
            <label htmlFor="zip">Zip Code</label>
            <input 
              {...register("zip", {required:true, minLength: 5})} 
              type="text"
              className="form-control"
              id="zip"
            />
            {errors.zip &&
              <div className="alert alert-danger">
                {errors.zip.type === 'required' &&
                  <span>Zip code is Required!!</span>
                }
                {errors.zip.type === 'minLength' &&
                  <span>Length of Zip Code must be a min of 5 characters!!!</span>
                }
              </div>
            }
          </div>
          <div className="col-md-6 col-sm-6">
            <label htmlFor="phone">Phone</label>
            <input 
              {...register("phone", {required:true, minLength: 12})} 
              type="tel"
              className="form-control"
              id="phone"
              placeholder="555-555-1212"
            />
            {errors.phone &&
              <div className="alert alert-danger">
                {errors.phone.type === 'required' &&
                  <span>Phone is Required!!</span>
                }
                {errors.phone.type === 'minLength' &&
                  <span>Length of phone must be a min of 12 characters in a 555-555-1212 or (555)555-1212 format!!!</span>
                }
              </div>
            }
          </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              {...register("email", {required:true, pattern: EMAIL_PATTERN})} 
              type="email"
              className="form-control"
              id="phone"
            />
            {errors.email &&
              <div className="alert alert-danger">
                {errors.email.type === 'required' &&
                  <span>Email is Required!!</span>
                }
                {errors.email.type === 'pattern' &&
                <span>Email is invalid!!</span>
              }
              </div>
            }
          </div>
          <div className="form-group">
            <label htmlFor="comment">Comment</label>
            <textarea 
              {...register("comment", {required:true})} 
              type="text"
              className="form-control"
              id="phone"
              rows="6"
              placeholder="Short description of work you would like us to do."
            >
            </textarea>
            {errors.comment &&
              <div className="alert alert-danger">
                {errors.comment.type === 'required' &&
                  <span>Comment is Required !!</span>
                }
              </div>
            }
          </div>
          <div className=''>
            {/* <button className="btn acc-btn btn-form" type="submit" disabled={!valid || pristine || submitting} >
              Submit
            </button> */}
            <button 
              type="submit"
              className="btn acc-btn btn-form"
            >
              Submit
            </button>
          </div>
      </form>
      </section>
      <section className='col-md-6' >
        <div className="row">
          <div className="title">
            We look forward to hearing from you.
          </div>

          <TomMap location={location()}  />

          <div className='col-md-6 col-sm-6'>
            <h5>Located:</h5>

            1313 Lynan Farms Drive <br/>
            Dade City FL 33525

          </div>
          <div className='col-md-6 col-sm-6'>
            <h5>Business Hours:</h5>
            Mon - Sun<br/>
            7:00 am - 7:00 pm 
          </div>
        </div>
      </section>
</>
  )
}

export default ContactForm;

