import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { View, ViewContent } from "../../../../components/View";
import DetailsSection from "./DetailsSection.jsx";
import Description from "./sections/Description.jsx";
import Participants from "./sections/Participants.jsx";
import Location from "./sections/Location.jsx";
import EventHeader from "./EventHeader.jsx";
import "./EventDetails.scss";

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string,
    description: PropTypes.string,
    users: PropTypes.array,
    location: PropTypes.object,
    organiser: PropTypes.object,
    isOrganiser: PropTypes.bool.isRequired,
    editEvent: PropTypes.func.isRequired
};

const defaultProps = {
    name: null,
    description: null,
    users: null,
    location: null,
    organiser: null
};

const enhance = pure;

const EventDetails = ({ id, name, description, users, location, organiser, isOrganiser, editEvent }) => (
    <View className="event">
        <EventHeader
            name={name}
            editEvent={editEvent}
            isOrganiser={isOrganiser}
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
                            organiser={organiser}
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
