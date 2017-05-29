import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Link } from "react-router";
import CardForm from "../../../components/CardForm";
import IconTextfield from "../../../components/IconTextfield";

const propTypes = {
    loading: PropTypes.bool,
    password: PropTypes.string,
    changePassword: PropTypes.func
};

const defaultProps = {
    loading: false,
    password: "",
    changePassword: () => {}
};

const enhance = pure;

const bindActions = (changePassword) => [{
    label: "Change your password",
    onClick: changePassword
}];

const ChangePassword = ({ loading, password, changePassword, setPassword }) => (
    <CardForm
        title="Change your password"
        loading={loading}
        actions={bindActions(changePassword)}
        className="changePassword"
    >
        <div className="remind__content">
            <div className="remind__form">
                <IconTextfield
                    icon="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={setPassword}
                />
            </div>
        </div>
    </CardForm>
);

ChangePassword.propTypes = propTypes;
ChangePassword.defaultProps = defaultProps;

export default enhance(ChangePassword);
