import React from "react";
import GameDetailsContainer from "../containers/GameDetailsContainer.jsx";
import { View, ViewHeader } from "../../../components/View";
import "./Games.scss";

export const GameDetailsView = name => (
    <View className="games">
        <ViewHeader title="Game details" />
        <GameDetailsContainer name={name} />
    </View>
);

export default GameDetailsView;
