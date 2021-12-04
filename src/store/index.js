import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import auth from 'store/reducers/auth';
import page from 'store/reducers/page';
import contact from 'store/reducers/contact';
import job from 'store/reducers/job';

export function initStore() {
  const reducers = combineReducers({
    auth,
    page,
    contact,
    job
  })

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

  return store;
}


