import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Link } from "react-router";
import CardForm from "../../../components/CardForm";
import IconTextfield from "../../../components/IconTextfield";

const propTypes = {
    loading: PropTypes.bool,
    token: PropTypes.string,
    reset: PropTypes.func,
    password: PropTypes.string,
    changePassword: PropTypes.func,
    setPassword: PropTypes.func,
    id: PropTypes.number
};

const defaultProps = {
    loading: false,
    password:"",
    reset: () => {},
    changePassword: () => {},
    setPassword: () => {}
};

const enhance = pure;

const bindActions = (reset,changePassword) => [{
    label: "Reset password",
    onClick: changePassword
}];

const Reset = ({ loading, id, reset, token, setPassword, changePassword, password }) => (
    <CardForm
        title="Reset password"
        loading={loading}
        actions={bindActions(reset, changePassword)}
        className="reset"
    >
        <div className="remind__content">
            <div className="remind__form">
                <IconTextfield
                    icon="password"
                    label="password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                />
            </div>
        </div>
    </CardForm>
);

Reset.propTypes = propTypes;
Reset.defaultProps = defaultProps;

export default enhance(Reset);
