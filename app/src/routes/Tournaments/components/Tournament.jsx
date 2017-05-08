import React from "react";
import pure from "recompose/pure";
import "./Tournament.scss";
import "../../Games/components/Games.scss";
import PropTypes from "prop-types";
import ViewHeader from "../../../components/view/ViewHeader.jsx";


import TournamentProcessContainer from "../containers/TournamentProcessContainer";

const propTypes = {
    router: PropTypes.object.isRequired,
    tournamentTypesView: PropTypes.bool,
    loggedIn: PropTypes.bool,
    toggleTournamentTypesView: PropTypes.func
};

const defaultProps = {
    tournamentTypesView: true,
    loggedIn: false,
    toggleTournamentTypesView: () => {}
};

const enhance = pure;

const Tournament = ({ router, tournamentTypesView, loggedIn, toggleFinishedTournamentsView }) => (
    <div className="tournamentTypes">
        <ViewHeader
            tournamentTypesView={tournamentTypesView}
            loggedIn={loggedIn}
            toggleFinishedTournamentsView={toggleFinishedTournamentsView}
        />
        <TournamentProcessContainer
            router={router}
        />
        {/* { tournamentTypesView ? (*/}
        {/* <TournamentTypes />*/}
        {/* ) : (*/}
        {/* <TournamentProcessContainer*/}
        {/* router={router}*/}
        {/* />*/}
        {/* )}*/}
    </div>


    // <TournamentsFinishedList />
);

Tournament.propTypes = propTypes;
Tournament.defaultProps = defaultProps;

export default enhance(Tournament);

