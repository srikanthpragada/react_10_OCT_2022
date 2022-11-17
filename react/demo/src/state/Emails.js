import React, { useState } from 'react'

export default function Emails() {
  var [emails, setEmails] = useState([])
  var [message, setMessage] = useState('')

  function addEmail() {
    setMessage("")
    var email = document.getElementById("txtEmail").value
    // check whether email is already present in emails 
    var pos = emails.indexOf(email)
    if (pos === -1) // not found
      setEmails([...emails, email])
    else
      setMessage("Email already exists!")
  }

  function deleteEmail(idxToDelete) {
    var email = emails[idxToDelete]
    if (!window.confirm(`Do you want to delete email -> ${email}?`))
      return;

    var newEmails = emails.filter((v, idx) => idx !== idxToDelete)
    setEmails(newEmails)
  }
  return (
    <>
      <h1>Emails</h1>
      Email : <input type="text" id="txtEmail" />
      <button onClick={addEmail}>Add</button>
      <span>{message}</span>
      <p></p>
      <ul>
        {emails.map((v, idx) =>
          <li key={idx}>{v} &nbsp;
            <button className="btn-danger btn-sm"
              onClick={() => deleteEmail(idx)}>Delete</button>
          </li>)}
      </ul>
    </>
  )
}


