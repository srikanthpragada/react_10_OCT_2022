import React from 'react';
import ReactDOM from 'react-dom/client';
import CourseList from './CourseList';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const courses = [{title: 'React', duration : 12, fee : 3000}, 
{title: 'Angular', duration : 15, fee : 4000},
{title: 'Python', duration : 30, fee : 10000} ]

root.render(
  <React.StrictMode>
        <CourseList courses={courses} />
  </React.StrictMode>
);

