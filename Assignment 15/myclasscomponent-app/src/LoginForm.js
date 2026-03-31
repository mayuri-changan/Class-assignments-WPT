// 2) Create LoginForm using class component 
//     accept username and password 
//     and display
// 	 hello <username>  on same page 

// 	if username = "iet" and password = "iet"
import React, { Component } from 'react';

class LoginForm extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            message: ''
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleLogin = () => {
        const { username, password } = this.state;

        if (username === "iet" && password === "iet") {
            this.setState({
                message: "Hello " + username
            });
        } else {
            this.setState({
                message: "Invalid Username or Password"
            });
        }
    };

    render() {
        return (
            <div>
                <h2>Login Form</h2>

                <input
                    type="text"
                    name="username"
                    placeholder="Enter Username"
                    onChange={this.handleChange}
                />

                <br /><br />

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    onChange={this.handleChange}
                />

                <br /><br />

                <button onClick={this.handleLogin}>Login</button>

                <h3>{this.state.message}</h3>
            </div>
        );
    }
}

export default LoginForm;
