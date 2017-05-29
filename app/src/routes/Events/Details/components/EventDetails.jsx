import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { View, ViewHeader, ViewContent } from "../../../../components/View";

const propTypes = {
    name: PropTypes.string
};

const defaultProps = {
    name: "Loading..."
};

const enhance = pure;

const EventDetails = ({ name, id }) => (
    <View>
        <ViewHeader
            title={name}
        />
        <ViewContent>
            {id}
        </ViewContent>
    </View>
);

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;

export default enhance(EventDetails);
