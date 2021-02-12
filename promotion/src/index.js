import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter basename={"/2020_SCH_Likelion_Promotion"}>
    <App />
  </BrowserRouter>
  ,
  document.getElementById('root')
);
