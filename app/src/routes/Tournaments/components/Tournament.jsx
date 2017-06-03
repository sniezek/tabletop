import React from "react";
import pure from "recompose/pure";
import "./Tournament.scss";
import PropTypes from "prop-types";
import TournamentHeaderContainer from "../containers/TournamentHeaderContainer";
import TournamentProcessContainer from "../containers/TournamentProcessContainer";


const propTypes = {
    router: PropTypes.object.isRequired,
    tournamentTypesView: PropTypes.bool
};

const defaultProps = {
    tournamentTypesView: false
};

const enhance = pure;

const Tournament = ({ router, tournamentTypesView }) => (
    <div className="tournaments">
        <TournamentHeaderContainer
            router={router}
            title="Tournament"
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
