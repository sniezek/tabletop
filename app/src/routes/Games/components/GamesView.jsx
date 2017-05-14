import React from "react";
import GamesContainer from "../containers/GamesContainer.jsx";
import GamesHeader from "./GamesHeader";
import "./Games.scss";

export const GamesView = () => (
    <div className="games">

      <GamesHeader/>
      <GamesContainer />
    </div>
);

export default GamesView;
