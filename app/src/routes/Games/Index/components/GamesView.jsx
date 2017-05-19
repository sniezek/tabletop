import React from "react";
import { View, ViewHeader } from "../../../../components/View/index";
import GamesContainer from "../containers/GamesContainer.jsx";
import "./Games.scss";

const GamesView = () => (
    <View className="games">
        <ViewHeader title="Available games" />
        <GamesContainer />
    </View>
);

export default GamesView;
