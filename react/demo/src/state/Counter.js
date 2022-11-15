import React from 'react'

export default function Counter() {
    var counter = 0;

    function increment() {
        console.log(counter)
        counter++;
    }

    function decrement() {
        counter--;
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
