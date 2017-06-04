import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { View, ViewContent } from "../../../../components/View";
import DetailsSection from "./DetailsSection.jsx";
import Description from "./sections/Description.jsx";
import Participants from "./sections/Participants.jsx";
import Location from "./sections/Location.jsx";
import EventHeader from "./EventHeader.jsx";
import AcceptPlayersDialog from "./AcceptPlayersDialog.jsx";
import "./EventDetails.scss";

const propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    users: PropTypes.array,
    location: PropTypes.object,
    organiser: PropTypes.object,
    isOrganiser: PropTypes.bool.isRequired,
    editEvent: PropTypes.func.isRequired,
    acceptPlayers: PropTypes.func.isRequired,
    waitingCount: PropTypes.number.isRequired,
    playersDialogOpened: PropTypes.bool.isRequired,
    closePlayersDialog: PropTypes.func.isRequired,
    revokePlayer: PropTypes.func.isRequired,
    acceptPlayer: PropTypes.func.isRequired
};

const defaultProps = {
    name: null,
    description: null,
    users: null,
    location: null,
    organiser: null
};

const enhance = pure;

const EventDetails = ({ name, description, users, location, organiser, isOrganiser, editEvent, acceptPlayers, waitingCount,
playersDialogOpened, closePlayersDialog, revokePlayer, acceptPlayer }) => (
    <View className="event">
        <EventHeader
            name={name}
            editEvent={editEvent}
            isOrganiser={isOrganiser}
            acceptPlayers={acceptPlayers}
            waitingCount={waitingCount}
        />
        <ViewContent>
            <div className="event__wrapper">
                <div className="event__content">
                    <main className="event__main">
                        <Description
                            content={description}
                        />
                        <DetailsSection
                            title="Tournaments"
                            loading
                        />
                        <DetailsSection
                            title="Sparrings"
                            loading
                        />
                    </main>
                    <aside className="event__sidebar">
                        <Location
                            location={location}
                        />
                        <Participants
                            list={users}
                            organiser={organiser}
                        />
                    </aside>
                </div>
            </div>
            <AcceptPlayersDialog
                open={playersDialogOpened}
                close={closePlayersDialog}
                revoke={revokePlayer}
                accept={acceptPlayer}
            />
        </ViewContent>
    </View>
);

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;

export default enhance(EventDetails);
