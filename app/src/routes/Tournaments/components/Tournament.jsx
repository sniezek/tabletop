import React from "react";
import pure from "recompose/pure";
import "./Tournament.scss";
import PropTypes from "prop-types";
import TournamentHeaderContainer from "../TournamentHeader/containers/TournamentHeaderContainer";
import TournamentProcessContainer from "../containers/TournamentProcessContainer";


const propTypes = {
    router: PropTypes.object.isRequired,
    tournamentView: PropTypes.bool
};

const defaultProps = {
    tournamentView: true
};

const enhance = pure;

const Tournament = ({ router, tournamentView }) => (
    <div className="tournaments">
        <TournamentHeaderContainer
            router={router}
            title="Tournament"
            tournamentView={tournamentView}
        />
        <TournamentProcessContainer
            router={router}
        />
    </div>
);

Tournament.propTypes = propTypes;
Tournament.defaultProps = defaultProps;

export default enhance(Tournament);
