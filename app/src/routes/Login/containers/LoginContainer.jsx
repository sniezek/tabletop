import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../modules/Login";
import Login from "../components/Login.jsx";

const propTypes = {
    login: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    login
};

const mapStateToProps = () => ({});

const initialState = {
    username: "",
    password: "",
    loading: false
};

class LoginContainer extends Component {
    constructor() {
        super();

        this.state = Object.assign({}, initialState);

        this.login = this.login.bind(this);
        this.remind = this.remind.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
    }

    setUsername({ target }) {
        /* eslint-disable no-param-reassign */
        this.setState({
            username: target.value
        });
    }

    setPassword({ target }) {
        /* eslint-disable no-param-reassign */
        this.setState({
            password: target.value
        });
    }

    login() {
        const { username, password } = this.state;

        this.setState({
            loading: true
        });

        this.props.login({
            username,
            password
        }, () => {
            this.setState(Object.assign({}, initialState));
        });
    }

    remind() {
        this.setState({
            loading: true
        });

        console.log(JSON.stringify(this.state));
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

LoginContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
