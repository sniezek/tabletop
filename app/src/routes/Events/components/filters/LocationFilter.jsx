import React from "react";
import PropTypes from "prop-types";
import Slider from "react-mdl/lib/Slider";
import EventsFilter from "./EventsFilter.jsx";
import LocationInput from "./LocationInput.jsx";
import "./LocationFilter.scss";

const propTypes = {
    radius: PropTypes.number,
    setRadius: PropTypes.func,
    setActive: PropTypes.func,
    active: PropTypes.bool
};

const defaultProps = {
    radius: 10,
    setRadius: () => {},
    setActive: () => {},
    active: false
};

const LocationFilter = ({ radius, setRadius, setActive, active }) => (
    <EventsFilter
        name="Location"
        id="location"
        setActive={setActive}
        active={active}
    >
        <LocationInput label="Within radius (km):">
            <Slider
                min={0}
                max={100}
                defaultValue={radius}
                onChange={setRadius}
            />
        </LocationInput>
        <LocationInput label="From:" />
    </EventsFilter>
);

LocationFilter.propTypes = propTypes;
LocationFilter.defaultProps = defaultProps;

export default LocationFilter;
