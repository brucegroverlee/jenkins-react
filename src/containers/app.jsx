import React from 'react'
import { render } from 'react-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'

import reducer from '../reducers'

import Router from './router.jsx' /***/

/**
 * SET REDUX'S STORE START
 */
let store
const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
 const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose // for chrome extension
  middleware.push(createLogger())
  store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(...middleware))
  )
} else {
  store = createStore(
    reducer,
    applyMiddleware(...middleware)
  )
}
/**
 * END
 */

 const App = () => {
   return (
     <Provider store={store}>
      <Router/>
     </Provider>
   )
 };

 export default App

render(
  <App/>,
  document.getElementById('app')
)
