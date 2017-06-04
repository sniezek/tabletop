import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import "../../components/Tournament.scss";
import TournamentHeaderContainer from "../../TournamentHeader/containers/TournamentHeaderContainer";
import TournamentDemoContainer from "../containers/TournamentDemoContainer";

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
        <TournamentDemoContainer
            router={router}
            // demoId={router.id} todo get id from url
            demoId={1}
        />
    </div>
);

TournamentDemo.propTypes = propTypes;
TournamentDemo.defaultProps = defaultProps;

export default enhance(TournamentDemo);
