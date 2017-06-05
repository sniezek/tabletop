import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import pure from "recompose/pure";
import Tooltip from "react-mdl/lib/Tooltip";
import Icon from "react-mdl/lib/Icon";
import "./ListItem.scss";

const propTypes = {
    primary: PropTypes.string.isRequired,
    secondary: PropTypes.string,
    minPlayers: PropTypes.number.isRequired,
    maxPlayers: PropTypes.number.isRequired,
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
    userId: PropTypes.number,
    removePlayer: PropTypes.func.isRequired,
    addPlayer: PropTypes.func.isRequired,
    showPlayers: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.oneOf(["tournament", "sparring"]).isRequired,
    users: PropTypes.array.isRequired,
    pending: PropTypes.array.isRequired
};

const defaultProps = {
    secondary: undefined,
    userId: undefined
};

const format = "DD MMM YYYY, h:mm A";

const enhance = pure;

const ListItem = ({ id, type, primary, secondary, minPlayers, maxPlayers, startDate, endDate, showPlayers, addPlayer, removePlayer, userId,
users, pending }) => (
    <div className="create-event-item">
        <div className="create-event-item__main">
            <div className="create-event-item__name">
                {primary}
                {!!secondary && (
                    <span>({secondary})</span>
                )}
            </div>
            <p>{moment(startDate).format(format)} – {moment(endDate).format(format)}</p>
            {minPlayers === maxPlayers ? (
                <p>{maxPlayers} players</p>
            ) : (
                <p>{minPlayers} – {maxPlayers} players</p>
            )}
        </div>
        <div className="create-event-item__actions">
            {userId && !users.find(u => u.id === userId) && !pending.find(u => u.id === userId) && (
                <Tooltip label="Add me to this match">
                    <Icon
                        name="person_add"
                        onClick={() => addPlayer({ type, matchId: id })}
                        className="create-event-item__action"
                    />
                </Tooltip>
            )}
            {userId && users.find(u => u.id === userId) && (
                <Tooltip label="Remove me from this match">
                    <Icon
                        name="remove_circle_outline"
                        onClick={() => removePlayer({ type, matchId: id })}
                        className="create-event-item__action"
                    />
                </Tooltip>
            )}
            <Tooltip label="Browse players list">
                <Icon
                    name="group"
                    onClick={() => showPlayers(users)}
                    className="create-event-item__action"
                />
            </Tooltip>
        </div>
    </div>
);

ListItem.propTypes = propTypes;
ListItem.defaultProps = defaultProps;

export default enhance(ListItem);
