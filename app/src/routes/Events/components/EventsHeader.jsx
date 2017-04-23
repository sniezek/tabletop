import React from "react";
import PropTypes from "prop-types";
import EventsHeaderOptions from "./EventsHeaderOptions.jsx";
import "./EventsHeader.scss";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func,
    toggleFilters: PropTypes.func,
    count: PropTypes.number,
    loggedIn: PropTypes.bool
};

const defaultProps = {
    mapView: true,
    toggleMapView: () => {},
    toggleFilters: () => {},
    count: 0,
    loggedIn: false
};

export const EventsHeader = ({ mapView, toggleMapView, toggleFilters, count, loggedIn }) => (
    <div className="events-header mdl-shadow--2dp">
        <h2 className="events-header__title">
            Browse events
            <span className="events-header__count">({count})</span>
        </h2>
        <EventsHeaderOptions
            mapView={mapView}
            toggleMapView={toggleMapView}
            toggleFilters={toggleFilters}
            loggedIn={loggedIn}
        />
    </div>
);

EventsHeader.propTypes = propTypes;
EventsHeader.defaultProps = defaultProps;

export default EventsHeader;
