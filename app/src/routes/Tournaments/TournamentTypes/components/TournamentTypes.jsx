import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import "../../components/Tournament.scss";
import TournamentHeaderContainer from "../../containers/TournamentHeaderContainer";
import TournamentTypesContainer from "../containers/TournamentTypesContainer";

const propTypes = {
    router: PropTypes.object.isRequired,
    tournamentTypesList: PropTypes.array,
    playDemo: PropTypes.func,
    demoView: PropTypes.bool,
    tournamentTypesView: PropTypes.bool,
};

const defaultProps = {
    tournamentTypesList: [],
    playDemo: () => {},
    demoView: false,
    tournamentTypesView: true
};

const enhance = pure;

const TournamentTypes = ({ router, tournamentTypesList, playDemo, demoView, tournamentTypesView }) => (
    <div className="tournamentTypes">
        <TournamentHeaderContainer
            router={router}
            title="Tournament types"
            tournamentTypesView={tournamentTypesView}
        />
        <TournamentTypesContainer
            router={router}
            tournamentTypesList={tournamentTypesList}
            demoView={demoView}
            playDemo={playDemo}
        />
    </div>
);


TournamentTypes.propTypes = propTypes;
TournamentTypes.defaultProps = defaultProps;

export default enhance(TournamentTypes);

