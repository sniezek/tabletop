import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Tooltip from "react-mdl/lib/Tooltip";
import Icon from "react-mdl/lib/Icon";
import "./ListItem.scss";

const propTypes = {
    name: PropTypes.string.isRequired,
    minPlayers: PropTypes.number.isRequired,
    maxPlayers: PropTypes.number.isRequired
};

const enhance = pure;

const ListItem = ({ name, minPlayers, maxPlayers }) => (
    <div className="create-event-item">
        <div className="create-event-item__main">
            <div className="create-event-item__name">{name}</div>
            <p>10-05-2015 18:00 - 10-05-2015 19:00</p>
            <p>{minPlayers} - {maxPlayers} players</p>
        </div>
        <div className="create-event-item__actions">
            <Tooltip label="Edit">
                <Icon
                    name="edit"
                    className="create-event-item__action"
                />
            </Tooltip>
            <Tooltip label="Remove">
                <Icon
                    name="clear"
                    className="create-event-item__action"
                />
            </Tooltip>
        </div>
    </div>
);

ListItem.propTypes = propTypes;

export default enhance(ListItem);
