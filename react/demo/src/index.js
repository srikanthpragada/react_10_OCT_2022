import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Emails from './state/Emails';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const courses = [{title: 'React', duration : 12, fee : 3000}, 
// {title: 'Angular', duration : 15, fee : 4000},
// {title: 'Python', duration : 30, fee : 10000} ]

// const products = [{title: 'Bose Headphones', price : 25000, disrate : 20}, 
// {title: 'Logitech Mouse', price : 15000, disrate : 10},
// {title: 'PowerBeats Pro', price : 26000, disrate : 15},
// {title: 'Dell XPS Laptop', price : 155000, disrate : 5}
// ]

root.render(
  <React.StrictMode>
        <Emails />
  </React.StrictMode>
);

