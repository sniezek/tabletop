import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import EventDetails from "../components/EventDetails.jsx";
import { loadEvent, acceptPlayer, discardPlayer, removePlayer, addPlayer } from "../../Index/modules/EventActions";

const propTypes = {
    id: PropTypes.number.isRequired,
    loadDetails: PropTypes.func.isRequired,
    tournaments: PropTypes.array,
    sparrings: PropTypes.array,
    user: PropTypes.object,
    organiser: PropTypes.object,
    router: PropTypes.object.isRequired,
    acceptPlayer: PropTypes.func.isRequired,
    discardPlayer: PropTypes.func.isRequired,
    addPlayer: PropTypes.func.isRequired,
    removePlayer: PropTypes.func.isRequired
};

const defaultProps = {
    tournaments: null,
    sparrings: null,
    user: null,
    organiser: null
};

const mapSparring = ({ id, gameName, game }) => user => ({ ...user, match: { name: gameName || game, type: "sparring", id } });
const mapTournament = ({ id, name }) => user => ({ ...user, match: { name, type: "tournament", id } });

const mergePlayers = (sparrings, tournaments) => {
    const spUsers = sparrings
        ? sparrings.reduce(
            (acc, sparring) => acc.concat(sparring.pending.map(mapSparring(sparring))),
            []
        ) : [];
    const trUsers = tournaments
        ? tournaments.reduce(
            (acc, tournament) => acc.concat(tournament.pending.map(mapTournament(tournament)))
            , []
        ) : [];
    return [...spUsers, ...trUsers];
};

const mapDispatchToProps = dispatch => ({
    loadDetails: id => loadEvent(id)(dispatch),
    acceptPlayer: payload => acceptPlayer(payload)(dispatch),
    discardPlayer: payload => discardPlayer(payload)(dispatch),
    removePlayer: payload => removePlayer(payload)(dispatch),
    addPlayer: payload => addPlayer(payload)(dispatch)
});

const mapStateToProps = ({ event, user }) => ({
    ...event,
    user
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EventDetailsContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            users: null,
            playersDialogOpened: false
        };

        this.editEvent = this.editEvent.bind(this);
        this.acceptPlayers = this.acceptPlayers.bind(this);
        this.closePlayersDialog = this.closePlayersDialog.bind(this);
        this.revokePlayer = this.revokePlayer.bind(this);
        this.acceptPlayer = this.acceptPlayer.bind(this);
        this.addPlayer = this.addPlayer.bind(this);
        this.removePlayer = this.removePlayer.bind(this);
        this.showPlayers = this.showPlayers.bind(this);
        this.closeMatchDialog = this.closeMatchDialog.bind(this);
    }

    componentDidMount() {
        const { loadDetails, id } = this.props;

        loadDetails(id);
    }

    componentWillReceiveProps({ tournaments, sparrings, id }) {
        if (this.props.tournaments !== tournaments || this.props.sparrings !== sparrings) {
            const _users = new Map();

            tournaments.forEach(({ users }) => {
                users.forEach(user => _users.set(user.id, user));
            });

            sparrings.forEach(({ users }) => {
                users.forEach(user => _users.set(user.id, user));
            });

            const users = Array.from(_users, ([, user]) => user);

            this.setState({
                users
            });
        }

        if (this.props.id !== id) {
            this.props.loadDetails(id);
        }
    }

    acceptPlayers() {
        this.setState({
            playersDialogOpened: true
        });
    }

    editEvent() {
        const { id, router } = this.props;

        router.push(`/events/edit/${id}`);
    }

    acceptPlayer(id, { id: matchId, type }) {
        const eventId = this.props.id;
        this.props.acceptPlayer({ type, userId: id, matchId, eventId });
    }

    revokePlayer(id, { id: matchId, type }) {
        const eventId = this.props.id;
        this.props.discardPlayer({ type, userId: id, matchId, eventId });
    }

    addPlayer({ type, matchId }) {
        const eventId = this.props.id;
        this.props.addPlayer({ type, matchId, eventId });
    }

    removePlayer({ type, matchId }) {
        const eventId = this.props.id;
        this.props.removePlayer({ type, matchId, eventId });
    }

    closePlayersDialog() {
        this.setState({
            playersDialogOpened: false
        });
    }

    showPlayers(matchPlayers) {
        this.setState({
            matchPlayers
        });
    }

    closeMatchDialog() {
        this.setState({
            matchPlayers: undefined
        });
    }

    render() {
        const { user, organiser } = this.props;
        const { playersDialogOpened, matchPlayers } = this.state;
        const isOrganiser = !!(user && organiser && user.id === organiser.id);
        const list = mergePlayers(this.props.sparrings, this.props.tournaments);

        return (
            <EventDetails
                {...this.props}
                users={this.state.users}
                isOrganiser={isOrganiser}
                editEvent={this.editEvent}
                acceptPlayers={this.acceptPlayers}
                waitingCount={list.length}
                playersDialogOpened={playersDialogOpened}
                matchPlayers={matchPlayers}
                matchDialogOpened={matchPlayers !== undefined}
                closeMatchDialog={this.closeMatchDialog}
                acceptPlayer={this.acceptPlayer}
                revokePlayer={this.revokePlayer}
                closePlayersDialog={this.closePlayersDialog}
                acceptPlayersList={list}
                addPlayer={this.addPlayer}
                removePlayer={this.removePlayer}
                showPlayers={this.showPlayers}
                userId={user ? user.id : undefined}
            />
        );
    }
}

EventDetailsContainer.propTypes = propTypes;
EventDetailsContainer.defaultProps = defaultProps;

export default enhance(EventDetailsContainer);
