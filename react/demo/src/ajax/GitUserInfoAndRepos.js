import React, { useState } from 'react'
import $ from 'jquery'

export default function GitUserInfoAndRepos() {
    const userid = React.createRef()
    const [data, setData] = useState({})
    const [message, setMessage] = useState('')
    const [repos, setRepos] = useState([])

    function getInfo() {
        setMessage('')
        setData({})
        setRepos([])
        $.get(
            {
                url: `https://api.github.com/users/${userid.current.value}`,
                success: function (resp) {
                    setData(resp)
                },
                error: function (error) {
                    setMessage("Sorry! Invalid userid")
                    //console.log(error.responseJSON.message)
                }
            }
        );
    }

    function getRepos() {
        
        $.get(
            {
                url: `https://api.github.com/users/${userid.current.value}/repos?sort=created&per_page=10`,
                success: function (repos) {
                    setRepos(repos)
                },
                error: function (error) {
                    setMessage("Sorry! Cannot get repos information!")
                }
            }
        );
    }


    return (
        <>
            <h1>Github User Info</h1>
            <input type="text" ref={userid} defaultValue="srikanthpragada" />
            <span>{message}</span>
            <p></p>
            <button onClick={getInfo}>Get Info</button>
            &nbsp;
            <button onClick={getRepos}>Get Repos</button>
           
            <p></p>
            {
                data.name &&
                <div className="row">
                    <div className="col-sm-6">
                        {data.name}
                        <p></p>
                        {data.location}
                    </div>
                    <div className="col-sm-6">
                            <img style={{ width: '300px', height: '300px' }}
                                 src={data.avatar_url} alt={data.name} title={data.name}
                                 className="image image-responsive" />
                    </div>
                </div>
            }
            <p></p>
            {repos.length > 0 &&
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th> 
                            <th>Created On</th>
                        </tr>
                    </thead>
                    <tbody>
                        {repos.map((r, idx) => 
                            <tr key={idx}>
                                <td>
                                    <a target="_blank" href={r.html_url} rel="noreferrer">{r.name}</a>
                                </td>
                                <td>
                                    {r.description}
                                </td>
                                <td>
                                    {r.created_at}
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
