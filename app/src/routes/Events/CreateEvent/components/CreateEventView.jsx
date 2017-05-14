import React from "react";
import pure from "recompose/pure";
import Button from "react-mdl/lib/Button";
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
                <div className="create-event__tab-wrapper">
                    ...
                </div>
                <div className="create-event__navigation">
                    <Button>Previous</Button>
                    <Button colored>Next</Button>
                </div>
            </div>
        </ViewContent>
    </View>
);

export default enhance(CreateEventView);
