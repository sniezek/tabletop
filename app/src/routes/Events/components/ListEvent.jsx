import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Icon from "../../../components/Icon";
import ListEventTime from "./ListEventTime.jsx";
import ListEventGames from "./ListEventGames.jsx";

const propTypes = {
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

const ListEvent = ({ joined, name, location, players, from, to, games }) => (
    <div className={joined ? "list-event list-event--joined" : "list-event"}>
        <ListEventTime
            from={from}
            to={to}
        />
        <div className="list-event__details">
            <h4 className="list-event__name">{name}</h4>
            <p className="list-event__location">
                <Icon
                    name="room"
                    className="list-event__location-icon"
                />
                {location}
            </p>
            <p className="list-event__count">{players} Players going</p>
        </div>
        <ListEventGames
            games={games}
        />
    </div>
);

ListEvent.propTypes = propTypes;
ListEvent.defaultProps = defaultProps;

export default enhance(ListEvent);
