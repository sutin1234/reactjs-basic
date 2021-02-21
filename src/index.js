import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes.js'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      { routes }
    </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);
