import React from "react";
import Slider from "react-mdl/lib/Slider";
import EventsFilter from "./EventsFilter.jsx";
import LocationInput from "./LocationInput.jsx";
import "./LocationFilter.scss";

const LocationFilter = () => (
    <EventsFilter
        name="Location"
        id="location"
    >
        <LocationInput label="Within radius (km):">
            <Slider
                min={0}
                max={100}
                defaultValue={10}
            />
        </LocationInput>
        <LocationInput label="From:" />
    </EventsFilter>
);

export default LocationFilter;
