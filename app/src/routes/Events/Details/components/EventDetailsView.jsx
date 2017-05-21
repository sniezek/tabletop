import React from "react";
import pure from "recompose/pure";
import { View, ViewHeader, ViewContent } from "../../../../components/View";
import TournamentListContainer from "../containers/TournamentListContainer.jsx";

const enhance = pure;

const EventDetailsView = ({ router }) => (
    <View>
        <ViewHeader
            title="Event details"
        />
        <ViewContent>
            <TournamentListContainer
              router={router}
            />
        </ViewContent>
    </View>
);

export default enhance(EventDetailsView);
