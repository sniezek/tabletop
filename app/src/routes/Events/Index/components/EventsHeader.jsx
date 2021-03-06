import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { ViewHeader } from "../../../../components/View";
import EventsHeaderOptions from "./EventsHeaderOptions.jsx";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func,
    toggleFilters: PropTypes.func,
    count: PropTypes.number,
    loggedIn: PropTypes.bool,
    addNewEvent: PropTypes.func
};

const defaultProps = {
    mapView: true,
    toggleMapView: () => {},
    toggleFilters: () => {},
    addNewEvent: () => {},
    count: 0,
    loggedIn: false
};

const enhance = pure;

const EventsHeader = ({ mapView, toggleMapView, toggleFilters, count, loggedIn, addNewEvent }) => (
    <ViewHeader
        count={count}
        title="Browse events"
    >
        <EventsHeaderOptions
            mapView={mapView}
            toggleMapView={toggleMapView}
            toggleFilters={toggleFilters}
            loggedIn={loggedIn}
            addNewEvent={addNewEvent}
        />
    </ViewHeader>
);

EventsHeader.propTypes = propTypes;
EventsHeader.defaultProps = defaultProps;

export default enhance(EventsHeader);
