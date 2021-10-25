import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rentals from 'store/reducers/rentals';
import rental from 'store/reducers/rental';
import { rentalMapReducer } from 'store/reducers/map-reducer'; 
import auth from 'store/reducers/auth';
import page from 'store/reducers/page';

export function initStore() {
  const reducers = combineReducers({
    rentals,
    rental,
    auth,
    page,
    map: rentalMapReducer
  
  })

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return store;
}


