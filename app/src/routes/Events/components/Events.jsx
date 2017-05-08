import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { View } from "../../../components/View";
import EventsHeader from "./EventsHeader.jsx";
import EventsContent from "./EventsContent.jsx";
import EventsFilters from "./filters/EventsFilters.jsx";
import "./Events.scss";

const propTypes = {
    mapView: PropTypes.bool,
    toggleMapView: PropTypes.func,
    toggleFilters: PropTypes.func,
    displayFilters: PropTypes.bool,
    events: PropTypes.array,
    loggedIn: PropTypes.bool,
    lat: PropTypes.number,
    lng: PropTypes.number
};

const defaultProps = {
    mapView: true,
    toggleMapView: () => {},
    toggleFilters: () => {},
    displayFilters: false,
    events: [],
    loggedIn: false,
    lat: undefined,
    lng: undefined
};

const enhance = pure;

const Events = ({ mapView, toggleMapView, displayFilters, toggleFilters, events, loggedIn, lat, lng }) => (
    <View className="events">
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
