import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import "../../components/Tournament.scss";
import TournamentHeaderContainer from "../../containers/TournamentHeaderContainer";
import TournamentTypesList from "./TournamentTypesList";
import TournamentProcessContainer from "../../containers/TournamentProcessContainer";

const propTypes = {
    router: PropTypes.object.isRequired,
    tournamentTypesList: PropTypes.array,
    playDemo: PropTypes.func,
    demoView: PropTypes.bool
};

const defaultProps = {
    tournamentTypesList: [],
    playDemo: () => {},
    demoView: false
};

const enhance = pure;

const TournamentTypes = ({ router, tournamentTypesList, playDemo, demoView }) => (
    <div className="tournamentTypes">
        <TournamentHeaderContainer
            router={router}
            title="Tournament types"
        />
        {demoView ? (
            <h2>Play demo</h2>
      ) : (
          <TournamentTypesList
              router={router}
              tournamentTypesList={tournamentTypesList}
              playDemo={playDemo}
          />
      )}
    </div>
);


TournamentTypes.propTypes = propTypes;
TournamentTypes.defaultProps = defaultProps;

export default enhance(TournamentTypes);

