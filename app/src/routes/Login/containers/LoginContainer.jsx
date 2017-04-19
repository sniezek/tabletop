import React, { Component } from "react";
import Login from "../components/Login.jsx";

class LoginContainer extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        };
    }

    render() {
        return (
            <Login />
        );
    }
}

export default LoginContainer;
