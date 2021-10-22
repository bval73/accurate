

exports.errorHandler = (req, res, next) => {

  res.sendApiError = config => {
    const {status = 422, title, detail, err} = config;
    return res
      .status(status)
      .send({err: [{title, detail, err}]});
  }

  res.mongoError = dbError => {
    const normalizedErrors = [];
    const errorField = 'errors';

    if(dbError && dbError.hasOwnProperty(errorField) && 
      dbError.name === 'ValidationError' ) {
        const errors = dbError[errorField];
        
        for (let property in errors) {
          normalizedErrors.push({title: property, detail: errors[property].message});
        }
      }else{
        normalizedErrors.push({title:'DB Error', detail:'Ooops, something went wrong, Try again!!'});
      }
      return res.status(422).send({errors: normalizedErrors});
//          return normalizeErrors;
  }

  next(); 
}