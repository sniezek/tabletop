import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import TournamentHeader from "../components/TournamentHeader";

const propTypes = {
    router: PropTypes.object.isRequired,
    title: PropTypes.string,
    tournamentTypesView: PropTypes.bool
};

const defaultProps = {
    title: "Tournaments",
    tournamentTypesView: false
};

const enhance = pure;

class TournamentHeaderContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.redirectToTournamentTypes = this.redirectToTournamentTypes.bind(this);
        this.redirectToTournaments = this.redirectToTournaments.bind(this);
    }

    redirectToTournamentTypes() {
        this.props.router.push("/tournament/types");
    }

    redirectToTournaments() {
        this.props.router.push("/tournament");
    }

    render() {
        return (
            <TournamentHeader
                title={this.props.title}
                tournamentTypesView={this.props.tournamentTypesView}
                redirectToTournamentTypes={this.redirectToTournamentTypes}
                redirectToTournaments={this.redirectToTournaments}
            />
        );
    }
}

TournamentHeaderContainer.propTypes = propTypes;
TournamentHeaderContainer.defaultProps = defaultProps;

export default enhance(TournamentHeaderContainer);

