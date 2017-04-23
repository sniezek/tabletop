import React from "react";
import PropTypes from "prop-types";
import "./Match.scss";

const propTypes = {
  host: PropTypes.string.isRequired,
  guest: PropTypes.string.isRequired,
  winner: PropTypes.string.isRequired
};

const defaultProps = {};

export const Match = ({host, guest, winner}) => (
  <div>
    <div id="rectangle_host">{host}</div>
    <div id="rectangle_guest">{guest}</div>
    <br/>
  </div>
);

Match.propTypes = propTypes;
Match.defaultProps = defaultProps;

export default Match;
