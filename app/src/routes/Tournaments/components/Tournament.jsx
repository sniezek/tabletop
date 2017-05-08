import React from "react";
import pure from "recompose/pure";
import "./Tournament.scss";
import "../../Games/components/Games.scss";
import PropTypes from "prop-types";
import TournamentHeader from "./TournamentHeader";


import TournamentProcessContainer from "../containers/TournamentProcessContainer";

const propTypes = {
    router: PropTypes.object.isRequired
};

const defaultProps = {
};

const enhance = pure;

const Tournament = ({ router }) => (
    <div className="tournamentTypes">
        <TournamentHeader />
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

