import React from "react";
import { GoogleMap } from "react-google-maps";

const EventsMap = () => (
    <GoogleMap
        defaultZoom={6}
        defaultCenter={{ lat: 51.8335556, lng: 18.6491471 }}
    />
);

export default EventsMap;
