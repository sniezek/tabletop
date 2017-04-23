import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Card, CardTitle } from "react-mdl/lib/Card";
import Spinner from "react-mdl/lib/Spinner";
import CardFormActions from "./CardFormActions.jsx";
import "./CardForm.scss";

const propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    children: PropTypes.node.isRequired,
    actions: PropTypes.array,
    className: PropTypes.string
};

const defaultProps = {
    loading: false,
    actions: [],
    className: ""
};

const enhance = pure;

const CardForm = ({ title, loading, children, actions, className }) => (
    <Card shadow={0} className={`card-form ${className}`}>
        <CardTitle className="card-form__header">{title}</CardTitle>
        {loading && <Spinner className="card-form__spinner" />}
        {!loading && children}
        {!loading && actions.length > 0 && (
            <CardFormActions
                actions={actions}
            />
        )}
    </Card>
);

CardForm.propTypes = propTypes;
CardForm.defaultProps = defaultProps;

export default enhance(CardForm);
