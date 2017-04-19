import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router";
import CardForm from "../../../components/CardForm";
import LoginInput from "./LoginInput.jsx";
import "./Login.scss";

const propTypes = {
    loading: PropTypes.bool,
    username: PropTypes.string,
    password: PropTypes.string,
    login: PropTypes.func,
    remind: PropTypes.func,
    setUsername: PropTypes.func,
    setPassword: PropTypes.func
};

const defaultProps = {
    loading: false,
    username: "",
    password: "",
    login: () => {},
    remind: () => {},
    setUsername: () => {},
    setPassword: () => {}
};

const bindActions = (login, remind) => [{
    label: "Remind password",
    onClick: remind
}, {
    label: "Login",
    colored: true,
    onClick: login
}];

const Login = ({ loading, username, password, login, remind, setUsername, setPassword }) => (
    <CardForm
        title="Log in"
        loading={loading}
        actions={bindActions(login, remind)}
    >
        <div className="login__content">
            Don&#39;t have an account yet? <Link to="/register" className="login__link">Click here to register!</Link>
            <div className="login__form">
                <LoginInput
                    icon="face"
                    label="Username"
                    value={username}
                    onChange={setUsername}
                />
                <LoginInput
                    icon="lock"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                />
            </div>
        </div>
    </CardForm>
);

Login.propTypes = propTypes;
Login.defaultProps = defaultProps;

export default Login;
