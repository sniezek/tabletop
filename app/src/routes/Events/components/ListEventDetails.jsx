import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { Link } from "react-router";
import Icon from "../../../components/Icon";

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    players: PropTypes.number.isRequired
};

const enhance = pure;

const ListEventTime = ({ id, name, location, players }) => (
    <div className="list-event__details">
        <h4 className="list-event__name">
            <Link
                to={`/events/${id}`}
                className="list-event__link"
            >
                {name}
            </Link>
        </h4>
        <p className="list-event__location">
            <Icon
                name="room"
                className="list-event__location-icon"
            />
            {location}
        </p>
        <p className="list-event__count">{players} Players going</p>
    </div>
);

ListEventTime.propTypes = propTypes;

export default enhance(ListEventTime);
