import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";

const propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

const enhance = pure;

const LocationInput = ({ label, children }) => (
    <div className="location-filter__input">
        <div className="location-filter__input-label">
            {label}
        </div>
        <div className="location-filter__input-element">
            {children}
        </div>
    </div>
);

LocationInput.propTypes = propTypes;

export default enhance(LocationInput);
