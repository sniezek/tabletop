import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { View } from "../../../../components/View";
import EventsHeader from "./EventsHeader.jsx";
import EventsContent from "./EventsContent.jsx";
import EventsFilters from "./filters/EventsFilters.jsx";
import "./Events.scss";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func.isRequired,
    toggleFilters: PropTypes.func.isRequired,
    loadEvents: PropTypes.func.isRequired,
    displayFilters: PropTypes.bool,
    events: PropTypes.array,
    loggedIn: PropTypes.bool,
    lat: PropTypes.number,
    lng: PropTypes.number,
    addNewEvent: PropTypes.func.isRequired
};

const defaultProps = {
    mapView: true,
    displayFilters: false,
    events: [],
    loggedIn: false,
    lat: undefined,
    lng: undefined
};

const enhance = pure;

const Events = ({ mapView, toggleMapView, displayFilters, toggleFilters, events, loggedIn, lat, lng, loadEvents, addNewEvent }) => (
    <View className="events">
        <EventsHeader
            mapView={mapView}
            toggleMapView={toggleMapView}
            toggleFilters={toggleFilters}
            count={events.length}
            loggedIn={loggedIn}
            addNewEvent={addNewEvent}
        />
        <EventsFilters
            displayFilters={displayFilters}
            toggleFilters={toggleFilters}
            loadEvents={loadEvents}
        />
        <EventsContent
            lat={lat}
            lng={lng}
            events={events}
            mapView={mapView}
        />
    </View>
);

Events.propTypes = propTypes;
Events.defaultProps = defaultProps;

export default enhance(Events);
