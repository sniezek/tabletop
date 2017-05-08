import React from "react";
import pure from "recompose/pure";
import { View, ViewHeader } from "../../../components/View";
import "./HomeView.scss";

const enhance = pure;

export const HomeView = () => (
    <View className="home">
        <ViewHeader
            title="Home"
        />
        <div style={{ padding: "32px" }}>To be implemented...</div>
    </View>
);

export default enhance(HomeView);
