
import React from 'react';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Error } from 'helpers/functions';

const CreatePageForm = ({onSubmit}) => {
  const {
    register, 
    handleSubmit,
    formState: { errors }
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="acc-form">
      <div className="form-group">
        <label htmlFor="pageName">Page Name</label>
        <input 
          {...register("pageName", {required:'Page name is required'})} 
          type="text"
          className="form-control"
          id="pageName"/>
        <ErrorMessage as={<Error />} errors={errors} name="pagename" >
          {({message}) => <p>{message}</p>}
        </ErrorMessage>  
      </div>

      <div className="form-group">
        <label htmlFor="pageTitle">Page Title</label>
        <input 
          {...register("pageTitle", {required:'Page title is required'})} 
          type="text"
          className="form-control"
          id="pageTitle"/>
        <ErrorMessage as={<Error />} errors={errors} name="pageTitle" >
          {({message}) => <p>{message}</p>}
        </ErrorMessage> 
      </div>

      <div className="form-group">
        <label htmlFor="className">Class Name</label>
        <select 
          className="form-control" 
          id="className"
          {...register("className")} 
        >
          <option> col-md-6 </option>
          <option> col-md-4 </option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="side">Side</label>
        <select 
          className="form-control" 
          id="side"
          {...register("side")}
        > 
          <option> Left </option>
          <option> Right </option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="image">Image Url</label>
        <input 
          {...register("image")} 
          type="text"
          className="form-control"
          id="image"/>
      </div>

      <div className="form-group">
        <label htmlFor="p">Paragraph(s)</label>
        <input 
        {...register("p")} 
          type="text"
          className="form-control"
          id="p"/>
      </div>

      <div className="form-group">
        <label htmlFor="sectionTitle">Section Title</label>
        <input 
          {...register("sectionTitle")} 
          type="text"
          className="form-control"
          id="sectionTitle">
        </input>
      </div>

      <div className="form-group">
        <label htmlFor="section">Section</label>
          <input 
            {...register("section", {required:'Section number is required'})} 
            type="number"
            className="form-control"
            id="section"/>
          <ErrorMessage as={<Error />} errors={errors} name="section" >
            {({message}) => <p>{message}</p>}
          </ErrorMessage> 
      </div>

      <button 
        type="submit"
        className="btn acc-btn btn-form ">Create
      </button>
    </form>
  );
}

export default CreatePageForm;
