import React from "react";
import pure from "recompose/pure";
import { View, ViewHeader } from "../../../../components/View";
import "./CreateEventView.scss";

const enhance = pure;

const CreateEventView = () => (
    <View>
        <ViewHeader
            title="Create new event"
        />
    </View>
);

export default enhance(CreateEventView);
