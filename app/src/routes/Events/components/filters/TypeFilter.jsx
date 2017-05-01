import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Radio from "react-mdl/lib/Radio";
import RadioGroup from "react-mdl/lib/RadioGroup";
import EventsFilter from "./EventsFilter.jsx";
import "./TypeFilter.scss";

const propTypes = {
    setActive: PropTypes.func,
    active: PropTypes.bool,
    setType: PropTypes.func,
    type: PropTypes.string
};

const defaultProps = {
    setActive: () => {},
    active: false,
    type: "sparing",
    setType: () => {}
};

const enhance = pure;

const TypeFilter = ({ active, setActive, type, setType }) => (
    <EventsFilter
        name="Type"
        id="type"
        active={active}
        setActive={setActive}
    >
        <RadioGroup
            name="type"
            value={type}
            onChange={setType}
            className="type-filter__group"
        >
            <Radio
                value="sparing"
                ripple
            >
                Sparing
            </Radio>
            <Radio
                value="tournament"
                ripple
            >
                Tournament
            </Radio>
        </RadioGroup>
    </EventsFilter>
);

TypeFilter.propTypes = propTypes;
TypeFilter.defaultProps = defaultProps;

export default enhance(TypeFilter);
