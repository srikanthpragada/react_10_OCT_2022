import React from 'react'

export default function DateTime() {
  var today = new Date().toString()
  return (
    <h2>Today is : {today}</h2>
  )
}
