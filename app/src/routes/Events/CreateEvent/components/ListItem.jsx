import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import pure from "recompose/pure";
import Tooltip from "react-mdl/lib/Tooltip";
import Icon from "react-mdl/lib/Icon";
import "./ListItem.scss";

const propTypes = {
    name: PropTypes.string.isRequired,
    minPlayers: PropTypes.number.isRequired,
    maxPlayers: PropTypes.number.isRequired,
    startDate: PropTypes.number.isRequired,
    endDate: PropTypes.number.isRequired,
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};

const format = "DD MMM YYYY, h:mm A";

const enhance = pure;

const ListItem = ({ name, minPlayers, maxPlayers, startDate, endDate, remove, edit }) => (
    <div className="create-event-item">
        <div className="create-event-item__main">
            <div className="create-event-item__name">{name}</div>
            <p>{moment(startDate).format(format)} – {moment(endDate).format(format)}</p>
            {minPlayers === maxPlayers ? (
                <p>{maxPlayers} players</p>
            ) : (
                <p>{minPlayers} – {maxPlayers} players</p>
            )}
        </div>
        <div className="create-event-item__actions">
            <Tooltip label="Edit">
                <Icon
                    name="edit"
                    onClick={edit}
                    className="create-event-item__action"
                />
            </Tooltip>
            <Tooltip label="Remove">
                <Icon
                    name="clear"
                    onClick={remove}
                    className="create-event-item__action"
                />
            </Tooltip>
        </div>
    </div>
);

ListItem.propTypes = propTypes;

export default enhance(ListItem);
