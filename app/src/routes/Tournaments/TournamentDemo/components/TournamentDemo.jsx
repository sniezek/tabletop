import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import "../../components/Tournament.scss";
import TournamentHeaderContainer from "../../containers/TournamentHeaderContainer";
import TournamentProcessConatainer from "../../containers/TournamentProcessContainer";

const propTypes = {
    router: PropTypes.object.isRequired,
    tournamentName: PropTypes.string
};

const defaultProps = {
    tournamentName: "Tournament"

};

const enhance = pure;

const TournamentDemo = ({ router, tournamentName }) => (
    <div className="tournaments">
        <TournamentHeaderContainer
            router={router}
            title={`${tournamentName} demo`}
        />
        <TournamentProcessConatainer
            router={router}
        />
    </div>
);

TournamentDemo.propTypes = propTypes;
TournamentDemo.defaultProps = defaultProps;

export default enhance(TournamentDemo);
