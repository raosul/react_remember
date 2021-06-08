import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import ListPage from './pages/ListPage';
import CounterPage from './pages/CounterPage';
import UserPage from './pages/UserPage'
import { TodoHomePage } from './pages/terminal';
import { MouseTracker } from './component/terminal';
import '../src/component/assets/Styles/global.scss'
import RouteApp from './router/app.route'

ReactDOM.render(
  // <div>
  //   {/* <Home />
  //   <ListPage />
  //   <CounterPage />  
  //   <UserPage /> */}
  //   <TodoHomePage />
  // </div>
  <div className={'new_class_hh'} >
    <RouteApp />
    {/* <TodoHomePage /> */}
    {/* <h1>salam</h1> */}
    {/* <TodoHomePage /> */}
    {/* <MouseTracker /> */}

  </div>
  // you can use <></> or <Fragment></Fragment>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
