import React from "react";
import PropTypes from "prop-types";
import EventsHeader from "./EventsHeader.jsx";
import EventsMap from "./EventsMap.jsx";
import EventsList from "./EventsList.jsx";
import "./Events.scss";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func
};

const defaultProps = {
    mapView: true,
    toggleMapView: () => {}
};

export const Events = ({ mapView, toggleMapView }) => (
    <div className="events">
        <EventsHeader
            mapView={mapView}
            toggleMapView={toggleMapView}
        />
        { mapView ? (
            <EventsMap />
        ) : (
            <EventsList />
        )}
    </div>
);

Events.propTypes = propTypes;
Events.defaultProps = defaultProps;

export default Events;
