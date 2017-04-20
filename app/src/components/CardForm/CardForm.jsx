import React from "react";
import PropTypes from "prop-types";
import { Card, CardTitle } from "react-mdl/lib/Card";
import Spinner from "react-mdl/lib/Spinner";
import CardFormActions from "./CardFormActions.jsx";
import "./CardForm.scss";

const propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    children: PropTypes.node.isRequired,
    actions: PropTypes.array
};

const defaultProps = {
    loading: false,
    actions: []
};

const CardForm = ({ title, loading, children, actions }) => (
    <Card shadow={0} className="card-form">
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

export default CardForm;
