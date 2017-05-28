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
    id: PropTypes.number
};

const defaultProps = {
    loading: false,
    token: "",
    id: 0,
    reset: () => {}
};

const enhance = pure;

const bindActions = (reset) => [{
    label: "Reset password",
    onLoad: reset
}];

const Reset = ({ loading, token, id }) => (
    <CardForm
        title="Reset password"
        loading={loading}
        actions={bindActions(reset)}
        className="reset"
    >

    </CardForm>
);

Reset.propTypes = propTypes;
Reset.defaultProps = defaultProps;

export default enhance(Reset);
