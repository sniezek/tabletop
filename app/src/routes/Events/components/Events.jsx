import React from "react";
import PropTypes from "prop-types";
import EventsHeader from "./EventsHeader.jsx";
import EventsMap from "./EventsMap.jsx";
import EventsList from "./EventsList.jsx";
import EventsFilters from "./EventsFilters.jsx";
import "./Events.scss";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func,
    toggleFilters: PropTypes.func,
    displayFilters: PropTypes.bool
};

const defaultProps = {
    mapView: true,
    toggleMapView: () => {},
    toggleFilters: () => {},
    displayFilters: false
};

export const Events = ({ mapView, toggleMapView, displayFilters, toggleFilters }) => (
    <div className="events">
        <EventsHeader
            mapView={mapView}
            toggleMapView={toggleMapView}
            toggleFilters={toggleFilters}
        />
        <EventsFilters
            displayFilters={displayFilters}
            toggleFilters={toggleFilters}
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
