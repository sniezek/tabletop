import React from "react";
import pure from "recompose/pure";
import { View, ViewHeader, ViewContent } from "../../../components/View";
import "./HomeView.scss";

const enhance = pure;

export const HomeView = () => (
    <View className="home">
        <ViewHeader
            title="Home"
        />
        <ViewContent>
            <div style={{ padding: "32px" }}>Tabletop is a website where users can organise and join tabletop games events. <br /><br />Matches can be either sparrings or tournaments. <br /><br />Tournament scores are submitted by events' organisers, therefore each registered game has a ranking of players. <br /><br />Users have a variety of statistics and they can get achievements for being active players.</div>
        </ViewContent>
    </View>
);

export default enhance(HomeView);
