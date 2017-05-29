import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { View, ViewHeader, ViewContent } from "../../../../components/View";
import DetailsSection from "./DetailsSection.jsx";
import Description from "./sections/Description.jsx";
import Participants from "./sections/Participants.jsx";
import Location from "./sections/Location.jsx";
import "./EventDetails.scss";

const propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    users: PropTypes.array,
    location: PropTypes.object
};

const defaultProps = {
    name: "Loading...",
    description: null,
    users: null,
    location: null
};

const enhance = pure;

const EventDetails = ({ name, description, users, location }) => (
    <View className="event">
        <ViewHeader
            title={name}
        />
        <ViewContent>
            <div className="event__wrapper">
                <div className="event__content">
                    <main className="event__main">
                        <Description
                            content={description}
                        />
                        <DetailsSection
                            title="Tournaments"
                            loading
                        />
                        <DetailsSection
                            title="Sparrings"
                            loading
                        />
                    </main>
                    <aside className="event__sidebar">
                        <Location
                            location={location}
                        />
                        <Participants
                            list={users}
                        />
                    </aside>
                </div>
            </div>
        </ViewContent>
    </View>
);

EventDetails.propTypes = propTypes;
EventDetails.defaultProps = defaultProps;

export default enhance(EventDetails);
