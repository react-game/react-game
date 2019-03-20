import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import InterfaceStore from "./shared/InterfaceStore";

ReactDOM.render(
  <BrowserRouter>
    <InterfaceStore>
      <App />
    </InterfaceStore>
  </BrowserRouter>

, document.getElementById('root'));