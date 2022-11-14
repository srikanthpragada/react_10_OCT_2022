import React from 'react'

export default function CourseList(props) {
  return (
      <>
      <h2>Courses</h2>
      <ul>
        { props.courses.map( (c,idx) => 
                       <DisplayCourse key={idx} course={c} /> )}
      </ul>
      </>
  )
}

function DisplayCourse(props) {
    return(
       <li>
         <span className="text-primary">{props.course.title.toUpperCase()} </span> 
         - 
         <span className="text-danger">{props.course.fee} INR</span> 
      </li> 
    )
}