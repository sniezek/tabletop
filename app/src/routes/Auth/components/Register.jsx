import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Link } from "react-router";
import CardForm from "../../../components/CardForm";
import RegisterInput from "./RegisterInput.jsx";
import "./Register.scss";

const propTypes = {
    loading: PropTypes.bool,
    username: PropTypes.string,
    password: PropTypes.string,
    register: PropTypes.func,
    remind: PropTypes.func,
    setUsername: PropTypes.func,
    setPassword: PropTypes.func
};

const defaultProps = {
    loading: false,
    username: "",
    password: "",
    register: () => {},
    remind: () => {},
    setUsername: () => {},
    setPassword: () => {}
};

const enhance = pure;

const bindActions = (register) => [{
    label: "Register",
    colored: true,
    onClick: register
}];

const Register = ({ loading, username, password, register, remind, setUsername, setPassword }) => (
    <CardForm
        title="Register"
        loading={loading}
        actions={bindActions(register, remind)}
    >
        <div className="register__content">
            Already have an account? <Link to="/login" className="login__link">Click here to login!</Link>
            <div className="login__form">
                <RegisterInput
                    icon="face"
                    label="Username"
                    value={username}
                    onChange={setUsername}
                />
                <RegisterInput
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

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;

export default enhance(Register);
