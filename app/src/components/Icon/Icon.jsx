import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string
};

const defaultProps = {
    className: ""
};

const Icon = ({ name, className }) => (
    <i className={`material-icons ${className}`} role="presentation">{name}</i>
);

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
