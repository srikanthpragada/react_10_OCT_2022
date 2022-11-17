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
      var hours = ct.getHours().toString().padStart(2,0)
      var mins = ct.getMinutes().toString().padStart(2,0)
      var secs  = ct.getSeconds().toString().padStart(2,0)
      setClock(`${hours}:${mins}:${secs}`)
  }

  return (
      <h1>{clock}</h1>
  )
}
