import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import "../../components/Tournament.scss";
import TournamentHeaderContainer from "../../TournamentHeader/containers/TournamentHeaderContainer";
import FinishedTournamentsContainer from "../containers/FinishedTournamentsContainer";

const propTypes = {
    router: PropTypes.object.isRequired,
    finishedTournamentsList: PropTypes.array,
    tournamentView: PropTypes.bool,
    tournamentTypesView: PropTypes.bool,
    finishedTournamentsView: PropTypes.bool
};

const defaultProps = {
    finishedTournamentsList: [],
    tournamentView: false,
    tournamentTypesView: false,
    finishedTournamentsView: true
};

const enhance = pure;


const FinishedTournaments = ({ router, tournamentView, tournamentTypesView, finishedTournamentsView, finishedTournamentsList }) => (
    <div className="tournaments">
        <TournamentHeaderContainer
            router={router}
            title="Finished tournaments"
            tournamentView={tournamentView}
            tournamentTypesView={tournamentTypesView}
            finishedTournamentsView={finishedTournamentsView}
        />
        <FinishedTournamentsContainer
            finishedTournamentsList={finishedTournamentsList}
            router={router}
        />
    </div>
);


FinishedTournaments.propTypes = propTypes;
FinishedTournaments.defaultProps = defaultProps;

export default enhance(FinishedTournaments);

