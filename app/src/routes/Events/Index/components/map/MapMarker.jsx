import React from "react";
import PropTypes from "prop-types";
import { Marker } from "react-google-maps";

const propTypes = {
    event: PropTypes.object.isRequired,
    showPopup: PropTypes.func.isRequired,
    hidePopup: PropTypes.func.isRequired,
    goToEvent: PropTypes.func.isRequired
};

const MapMarker = ({ event, showPopup, hidePopup, goToEvent }) => (
    <Marker
        defaultAnimation={2}
        position={event.location}
        onMouseOver={() => showPopup(event)}
        onMouseOut={hidePopup}
        onClick={() => goToEvent(event)}
    />
);

MapMarker.propTypes = propTypes;

export default MapMarker;
