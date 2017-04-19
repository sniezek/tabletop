import React, { Component } from "react";
import Login from "../components/Login.jsx";

class LoginContainer extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: "",
            loading: false
        };

        this.login = this.login.bind(this);
        this.remind = this.remind.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setUsername(ev) {
        this.setState({
            username: ev.target.value
        });
    }

    setPassword(ev) {
        this.setState({
            password: ev.target.value
        });
    }

    login() {
        this.setState({
            loading: true
        });

        alert(JSON.stringify(this.state));
    }

    remind() {
        this.setState({
            loading: true
        });

        alert(JSON.stringify(this.state));
    }

    render() {
        const { loading, username, password } = this.state;

        return (
            <Login
                loading={loading}
                username={username}
                password={password}
                login={this.login}
                remind={this.remind}
                setUsername={this.setUsername}
                setPassword={this.setPassword}
            />
        );
    }
}

export default LoginContainer;
