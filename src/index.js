import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Showgame from './components/showLastgame';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import TableTik from './components/TikTak';
import Game from './components/homepage';
import history from './components/history'; 

ReactDOM.render(
  <React.StrictMode>
    <Router> 
    <Routes history={history}>
      {/* page 1 kentriko menu opoou o xristis epilegi na balei to onoma tou h na dei to teleutaio tou game me analitika to kathe bima  */}
      <Route exact  path="/" element={<Game/>}/> 
      <Route exact  path="/showlastgame" element={<Showgame/>}/> 
      <Route exact  path="/startgame/:id" element={<TableTik/>} /> 
         
    </Routes>
  </Router>  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
