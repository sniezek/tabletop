import React from "react";
import GameDetailsContainer from "../containers/GameDetailsContainer.jsx";
import GameDetailsHeader from "./GameDetailsHeader";
import "./Games.scss";

export const GameDetailsView = name => (
    <div className="games">
        <GameDetailsHeader />
        <GameDetailsContainer name={name} />
    </div>
);

export default GameDetailsView;
