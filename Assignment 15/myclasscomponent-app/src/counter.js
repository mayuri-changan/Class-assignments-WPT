// 1) With the concept of Class Component
//    Create Counter Application 

// Take 2 buttons Increment and Decrement
import React, { Component } from 'react';

export default class Counter extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
                <h2>Counter Application</h2>

                <h3>Count: {this.state.count}</h3>

                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}


