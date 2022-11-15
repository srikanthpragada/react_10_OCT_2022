import React, {useState} from 'react'

export default function CorrectCounter() {
    var [counter, setCounter] = useState(0)

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    return (
        <>
            <h1>Counter</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <h1 className="text-primary">{counter}</h1>
        </>
    )
}
