import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// //react router
// import { BrowserRouter } from 'react-router-dom'
//redux
import { createStore } from "redux";
import middleware from './redux/middleware'
import  reducers  from "./redux/reducers";
import { Provider } from "react-redux";
//bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore(reducers,middleware)

const routing = (
  <Provider store={ store }>
    <App />
  </Provider>

)

ReactDOM.render(
  routing
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
