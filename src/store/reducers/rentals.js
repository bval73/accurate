//Pure function
//Don't mutate arguments
//No API calls, no route transitions
//No function calls ie: Math.random()


const rentals = (state = [], action) => {

  switch(action.type) {
    case 'FETCH_RENTALS':
      return action.rentals;
    case 'CREATE_RENTAL':
      // const rentals = [...state]; //create copy of state
      // rentals.push(action.rental); //add another rental from the action
      // return rentals
      return [...state, action.rental]; //easier way to do the above..
    default:
      return state;
  }

}

export default rentals;

