

export const sameAs = (field, getValues) => (value) => {
// getValues is function of react-hook-form useForm
//debugger
  const compareTo = getValues()[field];
  if(compareTo !== value){
    return false;
  }
  return;
  
}
// eslint-disable-next-line
export const EMAIL_PATTERN = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

