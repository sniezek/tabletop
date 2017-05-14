import React from "react";
import pure from "recompose/pure";
import { Tabs, Tab } from "react-mdl/lib/Tabs";
import { View, ViewHeader, ViewContent } from "../../../../components/View";
import "./CreateEventView.scss";

const enhance = pure;

const CreateEventView = () => (
    <View className="create-event">
        <ViewHeader
            title="Create new event"
        />
        <ViewContent>
            <div className="create-event__content mdl-shadow--2dp">
                <Tabs activeTab={0}>
                    <Tab>Details</Tab>
                    <Tab>Sparrings</Tab>
                    <Tab>Tournaments</Tab>
                </Tabs>
            </div>
        </ViewContent>
    </View>
);

export default enhance(CreateEventView);
