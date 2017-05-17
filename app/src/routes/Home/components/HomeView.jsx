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
            <div style={{ padding: "32px" }}>To be implemented...</div>
        </ViewContent>
    </View>
);

export default enhance(HomeView);
