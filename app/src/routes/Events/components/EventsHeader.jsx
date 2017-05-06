import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import PageHeader from "../../../components/PageHeader";
import EventsHeaderOptions from "./EventsHeaderOptions.jsx";

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

const enhance = pure;

const EventsHeader = ({ mapView, toggleMapView, toggleFilters, count, loggedIn }) => (
    <PageHeader
        count={count}
        title="Browse events"
    >
        <EventsHeaderOptions
            mapView={mapView}
            toggleMapView={toggleMapView}
            toggleFilters={toggleFilters}
            loggedIn={loggedIn}
        />
    </PageHeader>
);

EventsHeader.propTypes = propTypes;
EventsHeader.defaultProps = defaultProps;

export default enhance(EventsHeader);
