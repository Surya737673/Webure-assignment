

// import { legacy_createStore,  applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootreducer';


// const composeEnhancers =
// typeof window === 'object' &&
// window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ ?   
//   window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_({
//     // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//   }) : compose;

// const enhancer = composeEnhancers(
// applyMiddleware(thunk),
// // other store enhancers if any
// );

// export const store = legacy_createStore(rootReducer, enhancer)

import { legacy_createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {authreducer} from './reducers/authreducer';

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});
export const store = legacy_createStore(authreducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
));