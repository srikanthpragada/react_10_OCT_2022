import React, { useEffect, useState } from 'react'
import $ from 'jquery'

export default function ListCourses() {
    const [courses, setCourses] = useState([])

    useEffect( () => {
        $.get(
            {
                url: `http://localhost:4000/courses`,
                success: function (courses) {
                    setCourses(courses)
                },
                error: function (error) {
                     alert("Sorry! Server is unreachable!")
                }
            }
        );
    }, []
    )


    return (
        <>
            <h1>Courses</h1>
         
            {courses.length > 0 &&
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Trainer</th> 
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map((c, idx) => 
                            <tr key={idx}>
                                <td>
                                   {c.title.toUpperCase()}
                                </td>
                                <td>
                                    {c.trainer}
                                </td>
                                <td>
                                    {c.price}
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            }

        </>
    )
}
