import React from "react";
import PropTypes from "prop-types";
import EventsHeaderOptions from "./EventsHeaderOptions.jsx";
import "./EventsHeader.scss";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func,
    toggleFilters: PropTypes.func
};

const defaultProps = {
    mapView: true,
    toggleMapView: () => {},
    toggleFilters: () => {}
};

export const EventsHeader = ({ mapView, toggleMapView, toggleFilters }) => (
    <div className="events-header mdl-shadow--2dp">
        <h2 className="events-header__title">
            Browse available events
            <span className="events-header__count">(125)</span>
        </h2>
        <EventsHeaderOptions
            mapView={mapView}
            toggleMapView={toggleMapView}
            toggleFilters={toggleFilters}
        />
    </div>
);

EventsHeader.propTypes = propTypes;
EventsHeader.defaultProps = defaultProps;

export default EventsHeader;
