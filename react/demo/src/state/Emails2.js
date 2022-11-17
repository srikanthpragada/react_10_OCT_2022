import React, { useState } from 'react'

export default function Emails2() {
  var [emails, setEmails] = useState([])

  function addEmail(email) {
    setEmails([...emails, email])
  }

  function deleteEmail(idxToDelete) {
    var newEmails = emails.filter((v, idx) => idx !== idxToDelete)
    setEmails(newEmails)
  }

  return (
    <>
      <h1>Emails</h1>
      <AddEmail emails={emails} add={addEmail} />
      <ListEmails emails={emails} deleteEmail={deleteEmail} />
    </>
  )
}

function AddEmail({ emails, add }) {
  var [message, setMessage] = useState('')

  function addEmail() {
    setMessage("")
    var email = document.getElementById("txtEmail").value
    // check whether email is already present in emails 
    var pos = emails.indexOf(email)
    if (pos === -1) // not found
      add(email)
    else
      setMessage("Email already exists!")
  }
  return (
    <>
      Email : <input type="text" id="txtEmail" />
      <button onClick={addEmail}>Add</button>
      <span>{message}</span>
      <p></p>
    </>
  )

}

function ListEmails({ emails, deleteEmail }) {

  function deleteSelectedEmail(idx) {
    var email = emails[idx]
    if (!window.confirm(`Do you want to delete email -> ${email}?`))
      return;

    deleteEmail(idx)  // delete email by calling method in parent 
  }
  return (
    <>
      {emails.length === 0 ? <h4>Sorry! No emails present.</h4> :
      <ul>
        {emails.map((v, idx) =>
          <li key={idx}>{v} &nbsp;
            <button className="btn-danger btn-sm"
              onClick={() => deleteSelectedEmail(idx)}>Delete</button>
          </li>)}
      </ul>
    }
    </>
  )

}