import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//configuring react router
import { BrowserRouter } from 'react-router-dom'
//configuring redux store
import { thunk } from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux";

import { Provider } from "react-redux"
import { userAuthReducer } from "./store/reducer/userAppStorage"
import './custom-scrollbar.css';


//import ErrorBoundary from "./screens/Error/Error"
//configuring the redux store
const rootReducer = combineReducers({
  userAuth: userAuthReducer,
})
//creating store
const store = createStore(rootReducer, applyMiddleware(thunk))




const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>

    <Provider store={store}>
        <App />

</Provider>
    {/*<div className='loader'>
      <div className='loader-inner'>
        <div className='loader-inner-inner'>
          <span className='material-icons'>check</span>
        </div>
      </div>
</div>*/}

  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

