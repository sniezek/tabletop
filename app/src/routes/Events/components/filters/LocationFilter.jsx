import React from "react";
import Slider from "react-mdl/lib/Slider";
import EventsFilter from "./EventsFilter.jsx";

const LocationFilter = () => (
    <EventsFilter
        name="Location"
        id="location"
    >
        Within radius (km):
        <Slider min={0} max={100} defaultValue={0} />
        From:
    </EventsFilter>
);

export default LocationFilter;
