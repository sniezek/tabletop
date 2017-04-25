import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Icon from "../../../components/Icon";
import ListEventTime from "./ListEventTime.jsx";

const propTypes = {
    joined: PropTypes.bool,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    players: PropTypes.number,
    from: PropTypes.number.isRequired,
    to: PropTypes.number.isRequired
};

const defaultProps = {
    joined: false,
    players: 0
};

const enhance = pure;

const ListEvent = ({ joined, name, location, players, from, to }) => (
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
        <div className="list-event__games">
            <ul className="list-event__games-list">
                <li>Warhammer 40k <span>(tournament, sparing)</span></li>
                <li>Dixit <span>(sparing)</span></li>
                <li>Chess <span>(tournament)</span></li>
                <li>Poker <span>(tournament, sparing)</span></li>
            </ul>
            <a className="list-event__games-more" href="#">...and 3 more</a>
        </div>
    </div>
);

ListEvent.propTypes = propTypes;
ListEvent.defaultProps = defaultProps;

export default enhance(ListEvent);
