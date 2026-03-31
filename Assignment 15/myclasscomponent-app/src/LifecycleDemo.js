//  Write a code to understand lifecycle of class component 


import React, { Component } from 'react';

export default class LifecycleDemo extends Component {

    constructor() {
        super();
        this.state = { count: 0 };
        console.log("1. Constructor");
    }

    componentDidMount() {
        console.log("3. componentDidMount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("4. shouldComponentUpdate");
        return true;
    }

    componentDidUpdate() {
        console.log("6. componentDidUpdate");
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        console.log("2. Render");

        return (
            <div>
                <h2>Lifecycle Demo</h2>
                <h3>Count: {this.state.count}</h3>

                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}


