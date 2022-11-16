import React, { useState } from 'react'

export default function Emails() {
  var [emails, setEmails] = useState([])

  function addEmail() {
    var email = document.getElementById("txtEmail").value
    setEmails([...emails, email])
  }

  function deleteEmail(idxToDelete) {
    var newEmails = emails.filter((v, idx) => idx !== idxToDelete)
    setEmails(newEmails)
  }
  return (
    <>
      <h1>Emails</h1>
      Email : <input type="text" id="txtEmail" />
      <button onClick={addEmail}>Add</button>
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


