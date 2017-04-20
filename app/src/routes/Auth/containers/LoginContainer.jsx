import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { login } from "../modules/Auth";
import Login from "../components/Login.jsx";

const propTypes = {
    login: PropTypes.func.isRequired,
    user: PropTypes.object,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    user: null
};

const mapDispatchToProps = {
    login
};

const mapStateToProps = ({ user }) => ({ user });

const initialState = {
    username: "",
    password: "",
    loading: false
};

class LoginContainer extends Component {
    constructor(props) {
        super(props);

        this.state = Object.assign({}, initialState);

        this.login = this.login.bind(this);
        this.remind = this.remind.bind(this);
        this.setUsername = this.setUsername.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.redirect = this.redirect.bind(this);
    }

    componentWillReceiveProps({ user }) {
        if (user) {
            this.redirect();
        }
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

    redirect() {
        const { router } = this.props;
        router.push("/");
    }

    login() {
        const { username, password } = this.state;

        this.setState({
            loading: true
        });

        this.props.login({
            username,
            password
        }, ({ ok }) => {
            if (!ok) {
                this.setState({
                    password: "",
                    loading: false
                });
            }
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
LoginContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
