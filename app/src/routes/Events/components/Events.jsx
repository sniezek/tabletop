import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import EventsHeader from "./EventsHeader.jsx";
import EventsMap from "./EventsMap.jsx";
import EventsList from "./EventsList.jsx";
import EventsFilters from "./EventsFilters.jsx";
import "./Events.scss";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func,
    toggleFilters: PropTypes.func,
    displayFilters: PropTypes.bool,
    events: PropTypes.array,
    loggedIn: PropTypes.bool
};

const defaultProps = {
    mapView: true,
    toggleMapView: () => {},
    toggleFilters: () => {},
    displayFilters: false,
    events: [],
    loggedIn: false
};

const enhance = pure;

const Events = ({ mapView, toggleMapView, displayFilters, toggleFilters, events, loggedIn }) => (
    <div className="events">
        <EventsHeader
            mapView={mapView}
            toggleMapView={toggleMapView}
            toggleFilters={toggleFilters}
            count={events.length}
            loggedIn={loggedIn}
        />
        <EventsFilters
            displayFilters={displayFilters}
            toggleFilters={toggleFilters}
        />
        { mapView ? (
            <EventsMap />
        ) : (
            <EventsList
                events={events}
            />
        )}
    </div>
);

Events.propTypes = propTypes;
Events.defaultProps = defaultProps;

export default enhance(Events);
