import React, {useState, useEffect} from 'react'

export default function DigitalClock(props) {
  var [clock, setClock] = useState("")

  // Call the function only for once 
  useEffect( () => {
      setInterval(changeClock, 1000)
      console.log("Setting timer")
  },[])

  function changeClock() {
      var ct = new Date()
      setClock(`${ct.getHours()}:${ct.getMinutes()}:${ct.getSeconds()}`)
  }

  return (
      <h1>{clock}</h1>
  )
}
