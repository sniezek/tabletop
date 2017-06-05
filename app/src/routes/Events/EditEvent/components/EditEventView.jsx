import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { View, ViewHeader, ViewContent } from "../../../../components/View";
import EditEventFormContainer from "../containers/EditEventFormContainer.jsx";
import "../../CreateEvent/components/CreateEventView.scss";

const propTypes = {
    router: PropTypes.object.isRequired
};

const enhance = pure;

const CreateEventView = ({ router }) => (
    <View className="create-event">
        <ViewHeader
            title="Edit event"
        />
        <ViewContent>
            <EditEventFormContainer
                router={router}
                id={parseInt(router.params.id, 10)}
            />
        </ViewContent>
    </View>
);

CreateEventView.propTypes = propTypes;

export default enhance(CreateEventView);
