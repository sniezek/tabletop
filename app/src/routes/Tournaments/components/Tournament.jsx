import React from "react";
import pure from "recompose/pure";
import "./Tournament.scss";
import PropTypes from "prop-types";
import TournamentHeaderContainer from "../TournamentHeader/containers/TournamentHeaderContainer";
import TournamentProcessContainer from "../containers/TournamentProcessContainer";


const propTypes = {
    router: PropTypes.object.isRequired,
    tournamentView: PropTypes.bool,
    tournamentTypesView: PropTypes.bool
};

const defaultProps = {
    tournamentView: true,
    tournamentTypesView: false
};

const enhance = pure;

const Tournament = ({ router, tournamentView, tournamentTypesView }) => (
    <div className="tournaments">
        <TournamentHeaderContainer
            router={router}
            title="Tournament"
            tournamentView={tournamentView}
            tournamentTypesView={tournamentTypesView}
        />
        <TournamentProcessContainer
            router={router}
        />
    </div>
);

Tournament.propTypes = propTypes;
Tournament.defaultProps = defaultProps;

export default enhance(Tournament);
