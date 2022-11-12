import React from 'react'

export default function Greet() {

  function greetUser()   {
     var user = document.getElementById("uname").value
     alert("Hello " + user)
  }

  return (
    <>
      <h2>Greet User</h2>
      What' your name : <input type="text" id="uname" />
      <p></p>
      <button onClick={greetUser}>Greet</button>
    </>
  )
}
