import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import TournamentHeader from "../components/TournamentHeader";

const propTypes = {
    router: PropTypes.object.isRequired,
    title: PropTypes.string,
    tournamentView: PropTypes.bool.isRequired
};

const defaultProps = {
    title: "Tournaments"
};

const enhance = pure;

class TournamentHeaderContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.redirectToTournamentTypes = this.redirectToTournamentTypes.bind(this);
        this.redirectToTournaments = this.redirectToTournaments.bind(this);
        this.redirectToFinishedTournaments = this.redirectToFinishedTournaments.bind(this);
    }

    redirectToTournamentTypes() {
        this.props.router.push("/tournament/types");
    }

    redirectToTournaments() {
        this.props.router.push("/tournament");
    }

    redirectToFinishedTournaments() {
        this.props.router.push("/tournament/finished");
    }

    render() {
        return (
            <TournamentHeader
                title={this.props.title}
                tournamentView={this.props.tournamentView}
                redirectToTournamentTypes={this.redirectToTournamentTypes}
                redirectToTournaments={this.redirectToTournaments}
                redirectToFinishedTournaments={this.redirectToFinishedTournaments}
            />
        );
    }
}

TournamentHeaderContainer.propTypes = propTypes;
TournamentHeaderContainer.defaultProps = defaultProps;

export default enhance(TournamentHeaderContainer);

