import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Checkbox from "react-mdl/lib/Checkbox";
import EventsFilter from "./EventsFilter.jsx";
import "./TypeFilter.scss";

const propTypes = {
    setActive: PropTypes.func,
    active: PropTypes.bool,
    sparing: PropTypes.bool,
    tournament: PropTypes.bool,
    toggleSparing: PropTypes.func,
    toggleTournament: PropTypes.func
};

const defaultProps = {
    setActive: () => {},
    active: false,
    sparing: true,
    tournament: true,
    toggleSparing: () => {},
    toggleTournament: () => {}
};

const enhance = pure;

const TypeFilter = ({ active, setActive, sparing, tournament, toggleSparing, toggleTournament }) => (
    <EventsFilter
        name="Type"
        id="type"
        active={active}
        setActive={setActive}
    >
        <Checkbox
            label="Sparing"
            ripple
            checked={sparing}
            onChange={toggleSparing}
        />
        <Checkbox
            label="Tournament"
            ripple
            checked={tournament}
            onChange={toggleTournament}
        />
    </EventsFilter>
);

TypeFilter.propTypes = propTypes;
TypeFilter.defaultProps = defaultProps;

export default enhance(TypeFilter);
