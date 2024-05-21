import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducers/movieReducer';

import App from './components/App';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';
// import { store } from './state/store'
import {createStore} from 'redux';

import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
const store = createStore (reducer)
const domNode =  document.getElementById('root')
const root = createRoot(domNode);

root.render(
  <Provider store={store}>
      <App />
  </Provider>,
 
);

// import './styles/reset.css'
// import './styles/styles.css'
// import React from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './components/App'

// import {  Provider } from 'react-redux'
// import { store } from './state/store'

// const domNode = document.getElementById('root')
// const root = createRoot(domNode)

// root.render(
//   <Provider store={store}>
//   <App />
//   </Provider>
// );

// import React from "react";
// import ReactDOM from "react-dom";
// import { Provider } from "react-redux";
// import { createStore } from 'redux';
// import rootReducer from './reducers';
// import App from './components/App';

// const store = createStore(rootReducer);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')

// );


