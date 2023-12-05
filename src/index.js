import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/weather-forecast/'>
    <App />
  </BrowserRouter>
);


//<BrowserRouter basename='/weather-forecast/'> use this for github-pages
