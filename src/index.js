import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// import { store } from './store/configureStore'
import App from './containers/App' // изменили путь
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import {rootReducer} from "./reducers/index";


import registerServiceWorker from './registerServiceWorker'

import './index.css'

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
