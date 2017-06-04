import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Link } from "react-router";
import CardForm from "../../../components/CardForm";
import IconTextfield from "../../../components/IconTextfield";
import "./Reset.scss";

const propTypes = {
    loading: PropTypes.bool,
    token: PropTypes.string,
    reset: PropTypes.func,
    password: PropTypes.string,
    confirmPassword: PropTypes.string,
    changePassword: PropTypes.func,
    setPassword: PropTypes.func,
    setConfirmPassword: PropTypes.func,
    id: PropTypes.number
};

const defaultProps = {
    loading: false,
    password: "",
    confirmPassword: "",
    reset: () => {},
    changePassword: () => {},
    setPassword: () => {},
    setConfirmPassword: () => {}
};

const enhance = pure;

const bindActions = (reset,changePassword) => [{
    label: "Reset password",
    onClick: changePassword
}];

const Reset = ({ loading, id, reset, token, setPassword, setConfirmPassword, changePassword, password, confirmPassword }) => (
    <CardForm
        title="Reset password"
        loading={loading}
        actions={bindActions(reset, changePassword)}
        className="reset"
    >
        <div className="reset__content">
            <div className="reset__form">
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
                    value={confirmPassword}
                    onChange={setConfirmPassword}
                    required
                />
            </div>
        </div>
    </CardForm>
);

Reset.propTypes = propTypes;
Reset.defaultProps = defaultProps;

export default enhance(Reset);
