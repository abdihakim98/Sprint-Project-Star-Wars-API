import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// Step1 import { BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router } from "react-router-dom";

// Step2 then Add Router outside and inside the App

ReactDOM.render(
    <Router>
        <App />
    </Router>
     , document.getElementById('root')

   );

