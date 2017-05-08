import React from "react";
import PropTypes from "prop-types";
import Geosuggest from "react-geosuggest";
import pure from "recompose/pure";
import Slider from "react-mdl/lib/Slider";
import EventsFilter from "./EventsFilter.jsx";
import LocationInput from "./LocationInput.jsx";
import "./LocationFilter.scss";

const propTypes = {
    radius: PropTypes.number,
    setRadius: PropTypes.func.isRequired,
    setActive: PropTypes.func.isRequired,
    setLocation: PropTypes.func.isRequired,
    clearInput: PropTypes.func.isRequired,
    setRef: PropTypes.func.isRequired,
    active: PropTypes.bool
};

const defaultProps = {
    radius: 10,
    active: false
};

const enhance = pure;

const LocationFilter = ({ radius, setRadius, setActive, active, setLocation, setRef, clearInput }) => (
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
        <LocationInput label="From:">
            <Geosuggest
                inputClassName="mdl-textfield__input"
                suggestsClassName="mdl-shadow--2dp"
                onSuggestSelect={setLocation}
                onBlur={clearInput}
                ref={setRef}
            />
        </LocationInput>
    </EventsFilter>
);

LocationFilter.propTypes = propTypes;
LocationFilter.defaultProps = defaultProps;

export default enhance(LocationFilter);
