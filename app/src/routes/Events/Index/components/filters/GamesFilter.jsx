import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Tags from "../../../../../components/Tags";
import EventsFilter from "./EventsFilter.jsx";
import "./GamesFilter.scss";

const propTypes = {
    setActive: PropTypes.func,
    active: PropTypes.bool,
    selected: PropTypes.array,
    addGame: PropTypes.func,
    deleteGame: PropTypes.func
};

const defaultProps = {
    setActive: () => {},
    active: false,
    selected: [],
    addGame: () => {},
    deleteGame: () => {}
};

const enhance = pure;

const GamesFilter = ({ setActive, active, selected, addGame, deleteGame }) => (
    <EventsFilter
        name="Games"
        id="games"
        setActive={setActive}
        active={active}
    >
        <Tags
            tags={selected}
            onAdd={addGame}
            onDelete={deleteGame}
            placeholder="Enter game name..."
        />
    </EventsFilter>
);

GamesFilter.propTypes = propTypes;
GamesFilter.defaultProps = defaultProps;

export default enhance(GamesFilter);
