import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";

const propTypes = {
    mapView: PropTypes.bool,
    loggedIn: PropTypes.bool,
    toggleMapView: PropTypes.func,
    toggleFilters: PropTypes.func,
    addNewEvent: PropTypes.func
};

const defaultProps = {
    mapView: true,
    loggedIn: false,
    toggleMapView: () => {},
    toggleFilters: () => {},
    addNewEvent: () => {}
};

const enhance = pure;

const EventsHeaderOptions = ({ mapView, toggleMapView, toggleFilters, loggedIn, addNewEvent }) => (
    <div className="events-header__options">
        {loggedIn && <Button colored onClick={addNewEvent}>Add new event</Button>}
        <Button onClick={() => toggleFilters(true)}>Filters</Button>
        <Button onClick={() => toggleMapView(!mapView)}>
            { mapView ? "Toggle list view" : "Toggle map view" }
        </Button>
    </div>
);

EventsHeaderOptions.propTypes = propTypes;
EventsHeaderOptions.defaultProps = defaultProps;

export default enhance(EventsHeaderOptions);