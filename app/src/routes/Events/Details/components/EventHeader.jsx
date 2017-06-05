import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import Button from "react-mdl/lib/Button";
import { ViewHeader } from "../../../../components/View";

const propTypes = {
    name: PropTypes.string,
    editEvent: PropTypes.func.isRequired,
    isOrganiser: PropTypes.bool,
    acceptPlayers: PropTypes.func.isRequired,
    waitingCount: PropTypes.number.isRequired
};

const defaultProps = {
    name: "Loading...",
    isOrganiser: false
};

const enhance = pure;

const EventHeader = ({ name, isOrganiser, editEvent, acceptPlayers, waitingCount }) => (
    <ViewHeader
        title={name}
    >
        {!isOrganiser && (
            <div>
                <Button colored onClick={editEvent}>Edit event</Button>
                {waitingCount > 0 && (
                    <Button onClick={acceptPlayers}>Accept players <span className="event-players-count">{waitingCount}</span></Button>
                )}
            </div>
        )}
    </ViewHeader>
);

EventHeader.propTypes = propTypes;
EventHeader.defaultProps = defaultProps;

export default enhance(EventHeader);
