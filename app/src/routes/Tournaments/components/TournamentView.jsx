import React from "react";
import "./TournamentView.scss";
import { Link } from 'react-router';

export const TournamentView = () => (
    <div>
      <h1>Tournament view</h1>
      <h1><Link to="/tournament-results">Finish tournament</Link></h1>
    </div>
);

export default TournamentView;
