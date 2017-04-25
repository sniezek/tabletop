import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Icon from "../../../components/Icon";

const propTypes = {
    joined: PropTypes.bool
};

const enhance = pure;

const ListEvent = ({ joined }) => (
    <div className={joined ? "list-event list-event--joined" : "list-event"}>
        <div className="list-event__time">
            <time className="list-event__time-from">5:00 PM</time>
            <span className="list-event__time-delemiter" />
            <time className="list-event__time-to">9:00 PM</time>
        </div>
        <div className="list-event__details">
            <h4 className="list-event__name">Event name</h4>
            <p className="list-event__location">
                <Icon
                    name="room"
                    className="list-event__location-icon"
                />
                Event location
            </p>
            <p className="list-event__count">0 Players going</p>
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

export default enhance(ListEvent);
