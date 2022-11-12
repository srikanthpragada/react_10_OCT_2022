import React, { Component } from 'react'

export default class DateTimeCC extends Component {
  constructor() {
    super()
    this.now = new Date().toString() 
  }
  render() {
    return (
        <>
        <h1 className="text-success">Now</h1>
        <h2 style={{"color" : "red", "font-size" : "20pt"}}>{this.now}</h2>
        </>
    )
  }
}
