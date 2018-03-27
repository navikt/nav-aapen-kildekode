import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import ReduxThunk from 'redux-thunk'

import reducer from './reducer'
import { initialState } from './state'

export const initStore = (initialState = initialState) => {
  const composeEnhancers = composeWithDevTools({
    // options like actionSanitizer, stateSanitizer
  });
  return createStore(reducer, initialState, composeEnhancers(
    applyMiddleware(ReduxThunk),
    // other store enhancers if any
  ));
}
