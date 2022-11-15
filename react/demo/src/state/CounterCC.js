import React, { Component } from 'react'

export default class CounterCC extends Component {
    constructor() {
        super()
        this.state = { counter : 0, increment : 1 }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
    }

    increment() {
        console.log(this.state)
        this.setState({ counter : this.state.counter + 1 })
    }


    decrement() {
        this.setState({ counter: this.state.counter - 1 })
    }


    render() {
        return (
            <>
                <h1>Counter</h1>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <h1 className="text-primary">{this.state.counter}</h1>
            </>
        )
    }
}
