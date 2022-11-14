import React from 'react'

export default class GreetCC extends React.Component {

  constructor() {
     super()
     // Bind this reference with method 
     this.greetUser = this.greetUser.bind (this);
     this.message = "Hello "
  }
  greetUser() {
    var user = document.getElementById("uname").value
    console.log(this)
    alert(this.message + user)
  }

  render() {
    return (
      <>
        <h2>Greet User</h2>
        What' your name : <input type="text" id="uname" />
        <p></p>
        <button onClick={this.greetUser}>Greet</button>
      </>
    )
  }
}
