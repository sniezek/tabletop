import React from "react";
import PropTypes from "prop-types";
import { Marker } from "react-google-maps";

const propTypes = {
    event: PropTypes.object.isRequired,
    showPopup: PropTypes.func,
    hidePopup: PropTypes.func
};

const defaultProps = {
    showPopup: () => {},
    hidePopup: () => {}
};

const MapMarker = ({ event, showPopup, hidePopup }) => (
    <Marker
        defaultAnimation={2}
        position={event.location}
        onMouseOver={() => showPopup(event)}
        onMouseOut={hidePopup}
    />
);

MapMarker.propTypes = propTypes;
MapMarker.defaultProps = defaultProps;

export default MapMarker;
