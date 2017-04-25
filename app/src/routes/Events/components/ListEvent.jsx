import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import ListEventTime from "./ListEventTime.jsx";
import ListEventDetails from "./ListEventDetails.jsx";
import ListEventGames from "./ListEventGames.jsx";
import "./ListEvent.scss";

const propTypes = {
    id: PropTypes.number.isRequired,
    joined: PropTypes.bool,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    players: PropTypes.number,
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired,
    games: PropTypes.array.isRequired
};

const defaultProps = {
    joined: false,
    players: 0
};

const enhance = pure;

const ListEvent = ({ id, joined, name, location, players, from, to, games }) => (
    <div className={joined ? "list-event list-event--joined" : "list-event"}>
        <ListEventTime
            from={from}
            to={to}
        />
        <ListEventDetails
            id={id}
            name={name}
            location={location}
            players={players}
        />
        <ListEventGames
            games={games}
        />
    </div>
);

ListEvent.propTypes = propTypes;
ListEvent.defaultProps = defaultProps;

export default enhance(ListEvent);
