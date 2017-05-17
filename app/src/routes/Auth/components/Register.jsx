import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Link } from "react-router";
import CardForm from "../../../components/CardForm";
import IconTextfield from "../../../components/IconTextfield";
import "./Register.scss";

const propTypes = {
    loading: PropTypes.bool,
    username: PropTypes.string,
    password: PropTypes.string,
    email: PropTypes.string,
    passwordConfirm: PropTypes.string,
    register: PropTypes.func,
    remind: PropTypes.func,
    setUsername: PropTypes.func,
    setPassword: PropTypes.func,
    setEmail: PropTypes.func,
    setPasswordConfirm: PropTypes.func
};

const defaultProps = {
    loading: false,
    username: "",
    password: "",
    email: "",
    passwordConfirm: "",
    register: () => {},
    remind: () => {},
    setUsername: () => {},
    setPassword: () => {},
    setEmail: () => {},
    setPasswordConfirm: () => {}
};

const enhance = pure;

const bindActions = (register) => [{
    label: "Register",
    colored: true,
    onClick: register
}];

const Register = ({ loading, username, password, register, email, passwordConfirm, remind, setUsername, setPassword, setEmail,
setPasswordConfirm }) => (
    <CardForm
        title="Register"
        loading={loading}
        actions={bindActions(register, remind)}
        className="register"
    >
        <div className="register__content">
            Already have an account? <Link to="/login" className="register__link">Click here to login!</Link>
            <div className="register__form">
                <IconTextfield
                    icon="face"
                    label="Username"
                    value={username}
                    onChange={setUsername}
                    required
                />
                <IconTextfield
                    icon="email"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={setEmail}
                    required
                />
                <IconTextfield
                    icon="lock"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                    required
                />
                <IconTextfield
                    icon="lock"
                    label="Confirm password"
                    type="password"
                    value={passwordConfirm}
                    onChange={setPasswordConfirm}
                    required
                />
            </div>
        </div>
    </CardForm>
);

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;

export default enhance(Register);
