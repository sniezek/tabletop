import React from "react";
import pure from "recompose/pure";
import "./Tournament.scss";
import PropTypes from "prop-types";
import TournamentHeaderContainer from "../containers/TournamentHeaderContainer";
import TournamentProcessContainer from "../containers/TournamentProcessContainer";


const propTypes = {
    router: PropTypes.object.isRequired
};

const defaultProps = {
};

const enhance = pure;

const Tournament = ({ router }) => (
    <div className="tournamentTypes">
        <TournamentHeaderContainer
            router={router}
            title="Tournament"
        />
        <TournamentProcessContainer
            router={router}
        />
    </div>
);

Tournament.propTypes = propTypes;
Tournament.defaultProps = defaultProps;

export default enhance(Tournament);
