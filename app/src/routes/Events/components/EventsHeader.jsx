import React from "react";
import PropTypes from "prop-types";
import EventsHeaderOptions from "./EventsHeaderOptions.jsx";
import "./EventsHeader.scss";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func
};

const defaultProps = {
    mapView: true,
    toggleMapView: () => {}
};

export const EventsHeader = ({ mapView, toggleMapView }) => (
    <div className="events-header mdl-shadow--2dp">
        <h2 className="events-header__title">
            Browse available events
            <span className="events-header__count">(125)</span>
        </h2>
        <EventsHeaderOptions
            mapView={mapView}
            toggleMapView={toggleMapView}
        />
    </div>
);

EventsHeader.propTypes = propTypes;
EventsHeader.defaultProps = defaultProps;

export default EventsHeader;
