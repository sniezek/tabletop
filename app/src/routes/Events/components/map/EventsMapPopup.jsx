/* global google */
import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { InfoWindow } from "react-google-maps";

const propTypes = {
    event: PropTypes.object
};

const defaultProps = {
    event: {
        location: null
    }
};

const enhance = pure;

const EventsMapPopup = ({ event: { location } }) => (
    <InfoWindow
        position={location}
        options={{ pixelOffset: new google.maps.Size(0, -30) }}
    >
        <div>Example</div>
    </InfoWindow>
);

EventsMapPopup.propTypes = propTypes;
EventsMapPopup.defaultProps = defaultProps;

export default enhance(EventsMapPopup);
