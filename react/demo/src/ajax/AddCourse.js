import React, { useState } from 'react'
import $ from 'jquery'

export default function AddCourses() {
    const [course, setCourse] = useState({ title : '', trainer : 'Srikanth', price : 5000})
    
    function changeValue(e) {
        setCourse({ ...course, [e.target.name]: e.target.value })
    }
 
    function addCourse(e) {
        e.preventDefault()
        $.ajax(
            {
                url: `http://localhost:4000/courses`,
                method: 'post',
                data: course,
                success: function () {
                    alert("Course has been added successfully!")
                },
                error: function (error) {
                    alert("Sorry! Could not add course due to some error!")
                }
            }
        ) // ajax() 

    }  // addCourse()


    return (
        <>
            <h1>Add Course</h1>
            <form onSubmit={addCourse}>
                Title <br />
                <input type="text" name="title" value={course.title}
                                   onChange={changeValue} required />
                <p></p>
                Trainer <br />
                <input type="text" name="trainer" value={course.trainer}
                 onChange={changeValue} required />
                <p></p>
                Price <br />
                <input type="text" name="price" value={course.price} 
                onChange={changeValue} required />
                <p></p>
                <button>Submit</button>
            </form>

        </>
    )
}
