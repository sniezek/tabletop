import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Marker } from "react-google-maps";
import Spinner from "react-mdl/lib/Spinner";
import Map from "../../../components/Map";
import "./EventsMap.scss";

const propTypes = {
    events: PropTypes.array
};

const defaultProps = {
    events: []
};

const enhance = pure;

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

const EventsMap = ({ events }) => (
    <Map
        containerElement={containerElement}
        loadingElement={loadingElement}
        mapElement={mapElement}
    >
        { events.map(({ id, location }) => (
            <Marker
                key={id}
                position={location}
            />
        ))}
    </Map>
);

EventsMap.propTypes = propTypes;
EventsMap.defaultProps = defaultProps;

export default enhance(EventsMap);
