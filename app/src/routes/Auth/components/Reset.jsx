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
    id: PropTypes.string
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

const Reset = ({ loading, id, reset, token }) => (
    <CardForm
        title="Reset password"
        loading={loading}
        actions={bindActions(reset)}
        className="reset"
    >
        <div className="remind__content">
            <div className="remind__form">
                <IconTextfield
                    icon="email"
                    label="ID"
                    type="id"
                    value={id}
                    onChange={reset}
                />
            </div>
        </div>
    </CardForm>
);

Reset.propTypes = propTypes;
Reset.defaultProps = defaultProps;

export default enhance(Reset);
