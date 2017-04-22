import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    label: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
};

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

export default LocationInput;
