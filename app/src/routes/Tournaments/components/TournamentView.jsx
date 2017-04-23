import React from "react";
import "./TournamentView.scss";
import PropTypes from "prop-types";
import TournamentContainer from "../containers/TournamentContainer.jsx";

const propTypes = {
  router: PropTypes.object.isRequired
};

const TournamentView = ({router}) => (
    <TournamentContainer
      router={router}
    />
);

TournamentView.propTypes = propTypes;

export default TournamentView;
