import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { View, ViewContent } from "../../../../components/View";
import Description from "./sections/Description.jsx";
import Participants from "./sections/Participants.jsx";
import Location from "./sections/Location.jsx";
import EventHeader from "./EventHeader.jsx";
import PlayersDialog from "./PlayersDialog.jsx";
import List from "./sections/List.jsx";
import "./EventDetails.scss";

const propTypes = {
    userId: PropTypes.number,
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
    acceptPlayer: PropTypes.func.isRequired,
    sparrings: PropTypes.array,
    tournaments: PropTypes.array,
    acceptPlayersList: PropTypes.array.isRequired,
    addPlayer: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired,
    showPlayers: PropTypes.func.isRequired,
    matchPlayers: PropTypes.array,
    matchDialogOpened: PropTypes.bool.isRequired,
    closeMatchDialog: PropTypes.func.isRequired
};

const defaultProps = {
    name: undefined,
    description: undefined,
    users: undefined,
    location: undefined,
    organiser: undefined,
    sparrings: undefined,
    tournaments: undefined,
    userId: undefined,
    matchPlayers: []
};

const enhance = pure;

const EventDetails = ({ userId, name, description, users, location, organiser, isOrganiser, editEvent, acceptPlayers, waitingCount,
playersDialogOpened, closePlayersDialog, revokePlayer, acceptPlayer, sparrings, tournaments, acceptPlayersList, addPlayer, removePlayer,
showPlayers, matchPlayers, matchDialogOpened, closeMatchDialog }) => (
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
                        <List
                            title="Tournaments"
                            type="tournament"
                            events={tournaments}
                            userId={userId}
                            addPlayer={addPlayer}
                            removePlayer={removePlayer}
                            showPlayers={showPlayers}
                        />
                        <List
                            title="Sparrings"
                            type="sparring"
                            events={sparrings}
                            userId={userId}
                            addPlayer={addPlayer}
                            removePlayer={removePlayer}
                            showPlayers={showPlayers}
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
            <PlayersDialog
                open={playersDialogOpened}
                close={closePlayersDialog}
                revoke={revokePlayer}
                accept={acceptPlayer}
                players={acceptPlayersList}
                title="Accept players"
            />
            <PlayersDialog
                open={matchDialogOpened}
                close={closeMatchDialog}
                players={matchPlayers}
                title="Participants"
            />
        </ViewContent>
    </View>
);

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;

export default enhance(EventDetails);
