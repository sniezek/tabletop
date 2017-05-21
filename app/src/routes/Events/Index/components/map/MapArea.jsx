import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Circle } from "react-google-maps";

const propTypes = {
    radius: PropTypes.number.isRequired,
    center: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired
    }).isRequired
};

const options = {
    strokeColor: "#00BCD4",
    strokeOpacity: 0.8,
    strokeWeight: 1,
    fillColor: "#00BCD4",
    fillOpacity: 0.35
};

const enhance = pure;

const MapArea = ({ center, radius }) => (
    <Circle
        center={center}
        radius={radius * 1000}
        options={options}
    />
);

MapArea.propTypes = propTypes;

export default enhance(MapArea);
