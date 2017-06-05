import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import "../../components/Tournament.scss";
import TournamentHeaderContainer from "../../TournamentHeader/containers/TournamentHeaderContainer";
import TournamentTypesContainer from "../containers/TournamentTypesContainer";

const propTypes = {
    router: PropTypes.object.isRequired,
    tournamentTypesList: PropTypes.array,
    redirectToDemo: PropTypes.func,
    tournamentView: PropTypes.bool,
    tournamentTypesView: PropTypes.bool,
};

const defaultProps = {
    tournamentTypesList: [],
    redirectToDemo: () => {},
    tournamentView: false,
    tournamentTypesView: true
};

const enhance = pure;

const TournamentTypes = ({ router, tournamentView, tournamentTypesList, redirectToDemo, tournamentTypesView }) => (
    <div className="tournaments">
        <TournamentHeaderContainer
            router={router}
            title="Tournament types"
            tournamentTypesView={tournamentTypesView}
        />
        <TournamentTypesContainer
            router={router}
            tournamentView={tournamentView}
            tournamentTypesList={tournamentTypesList}
            redirectToDemo={redirectToDemo}
        />
    </div>
);


TournamentTypes.propTypes = propTypes;
TournamentTypes.defaultProps = defaultProps;

export default enhance(TournamentTypes);

