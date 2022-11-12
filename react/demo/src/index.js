import React from 'react';
import ReactDOM from 'react-dom/client';
import Greet from './basics/Greet';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Greet />
  </React.StrictMode>
);

