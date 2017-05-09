import React from "react";
import { View } from "../../../components/View";
import GamesContainer from "../containers/GamesContainer.jsx";
import GamesHeader from "./GamesHeader";
import "./Games.scss";

const GamesView = () => (
    <View className="games">
        <GamesHeader />
        <GamesContainer />
    </View>
);

export default GamesView;
