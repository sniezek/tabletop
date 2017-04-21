import React from "react";
import { withGoogleMap } from "react-google-maps";
import withScriptjs from "react-google-maps/lib/async/withScriptjs";
import Spinner from "react-mdl/lib/Spinner";
import EventsMap from "../components/EventsMap.jsx";

const EnhancedEventsMap = withScriptjs(
    withGoogleMap(
        props => (
            <EventsMap {...props} />
        )
    )
);

const containerElement = (
    <div className="events-map" />
);

const mapElement = (
    <div className="events-map__map" />
);

const loadingElement = (
    <div className="events-map">
        <Spinner className="events-map__spinner" />
    </div>
);

const EventsMapContainer = () => (
    <EnhancedEventsMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp"
        containerElement={containerElement}
        mapElement={mapElement}
        loadingElement={loadingElement}
    />
);

export default EventsMapContainer;
