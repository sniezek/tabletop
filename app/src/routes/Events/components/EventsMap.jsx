import React from "react";
import pure from "recompose/pure";
import Spinner from "react-mdl/lib/Spinner";
import Map from "../../../components/Map";
import "./EventsMap.scss";

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

const EventsMap = () => (
    <Map
        containerElement={containerElement}
        loadingElement={loadingElement}
        mapElement={mapElement}
    />
);

export default enhance(EventsMap);
