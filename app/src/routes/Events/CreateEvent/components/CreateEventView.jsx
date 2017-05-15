import React from "react";
import pure from "recompose/pure";
import { View, ViewHeader, ViewContent } from "../../../../components/View";
import CreateEventFormContainer from "../containers/CreateEventFormContainer.jsx";
import "./CreateEventView.scss";

/*
 <Geosuggest
 className="mdl-textfield mdl-textfield--floating-label"
 inputClassName="mdl-textfield__input"
 suggestsClassName="mdl-shadow--2dp"
 label="Location"
 placeholder=""
 id="create-event-location"
 />
 */

const enhance = pure;

const CreateEventView = () => (
    <View className="create-event">
        <ViewHeader
            title="Create new event"
        />
        <ViewContent>
            <CreateEventFormContainer />
        </ViewContent>
    </View>
);

export default enhance(CreateEventView);
