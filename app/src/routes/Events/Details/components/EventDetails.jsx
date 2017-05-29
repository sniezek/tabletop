import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { View, ViewHeader, ViewContent } from "../../../../components/View";
import "./EventDetails.scss";

const propTypes = {
    name: PropTypes.string
};

const defaultProps = {
    name: "Loading..."
};

const enhance = pure;

const EventDetails = ({ name, id, description }) => (
    <View className="event">
        <ViewHeader
            title={name}
        />
        <ViewContent>
            <div className="event__wrapper">
                <div className="event__content">
                    <main className="event__main">
                        <div className="event-section mdl-shadow--2dp">
                            <h3 className="event-section__title">Description</h3>
                            {description}
                        </div>
                        <div className="event-section mdl-shadow--2dp">
                            <h3 className="event-section__title">Tournaments</h3>
                            {description}
                        </div>
                        <div className="event-section mdl-shadow--2dp">
                            <h3 className="event-section__title">Sparrings</h3>
                            {description}
                        </div>
                    </main>
                    <aside className="event__sidebar">
                        <div className="event-location">

                        </div>
                        <div className="event-section mdl-shadow--2dp">
                            <h3 className="event-section__title">Participants</h3>
                            {description}
                        </div>
                    </aside>
                </div>
            </div>
        </ViewContent>
    </View>
);

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;

export default enhance(EventDetails);
