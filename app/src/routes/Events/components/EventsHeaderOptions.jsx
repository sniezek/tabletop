import React from "react";
import PropTypes from "prop-types";
import Button from "react-mdl/lib/Button";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func
};

const defaultProps = {
    mapView: true,
    toggleMapView: () => {}
};

export const EventsHeaderOptions = ({ mapView, toggleMapView }) => (
    <div className="events-header__options">
        <Button>Filters</Button>
        <Button onClick={() => toggleMapView(!mapView)}>
            { mapView ? "Toggle list view" : "Toggle map view" }
        </Button>
    </div>
);

EventsHeaderOptions.propTypes = propTypes;
EventsHeaderOptions.defaultProps = defaultProps;

export default EventsHeaderOptions;