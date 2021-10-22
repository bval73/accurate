
export const capitalize = value => {
  if(!value || typeof value !== 'string' ) { return '';  }

  return value
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ')
}

export const Error = ({children}) => {
//  console.log('the children are ', children);
  return(
    <div className="alert alert-danger">
      {children}
    </div>
  )
}

