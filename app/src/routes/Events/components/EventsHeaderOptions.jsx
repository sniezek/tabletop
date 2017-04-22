import React from "react";
import PropTypes from "prop-types";
import Button from "react-mdl/lib/Button";

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

export const EventsHeaderOptions = ({ mapView, toggleMapView, toggleFilters }) => (
    <div className="events-header__options">
        <Button onClick={() => toggleFilters(true)}>Filters</Button>
        <Button onClick={() => toggleMapView(!mapView)}>
            { mapView ? "Toggle list view" : "Toggle map view" }
        </Button>
    </div>
);

EventsHeaderOptions.propTypes = propTypes;
EventsHeaderOptions.defaultProps = defaultProps;

export default EventsHeaderOptions;