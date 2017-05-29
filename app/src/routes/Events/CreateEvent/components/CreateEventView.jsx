import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { View, ViewHeader, ViewContent } from "../../../../components/View";
import CreateEventFormContainer from "../containers/CreateEventFormContainer.jsx";
import "./CreateEventView.scss";

const propTypes = {
    router: PropTypes.object.isRequired
};

const enhance = pure;

const CreateEventView = ({ router }) => (
    <View className="create-event">
        <ViewHeader
            title="Create new event"
        />
        <ViewContent>
            <CreateEventFormContainer
                router={router}
            />
        </ViewContent>
    </View>
);

CreateEventView.propTypes = propTypes;

export default enhance(CreateEventView);
