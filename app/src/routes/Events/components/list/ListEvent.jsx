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
    location: PropTypes.object.isRequired,
    players: PropTypes.number,
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
    sparrings: PropTypes.array.isRequired,
    tournaments: PropTypes.array.isRequired
};

const defaultProps = {
    joined: false,
    players: 0
};

const enhance = pure;

const ListEvent = ({ id, joined, name, location, players, startDate, endDate, sparrings, tournaments }) => (
    <div className={joined ? "list-event list-event--joined" : "list-event"}>
        <ListEventTime
            from={startDate}
            to={endDate}
        />
        <ListEventDetails
            id={id}
            name={name}
            location={location}
            players={players}
        />
        <ListEventGames
            sparrings={sparrings}
            tournaments={tournaments}
        />
    </div>
);

ListEvent.propTypes = propTypes;
ListEvent.defaultProps = defaultProps;

export default enhance(ListEvent);
