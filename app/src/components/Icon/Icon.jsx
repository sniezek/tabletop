import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";

const propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string
};

const defaultProps = {
    className: ""
};

const enhance = pure;

const Icon = ({ name, className }) => (
    <i className={`material-icons ${className}`} role="presentation">{name}</i>
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default enhance(Icon);
