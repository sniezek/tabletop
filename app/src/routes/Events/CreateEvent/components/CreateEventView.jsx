import React from "react";
import pure from "recompose/pure";
import Geosuggest from "react-geosuggest";
import Button from "react-mdl/lib/Button";
import Textfield from "react-mdl/lib/Textfield";
import { Tabs, Tab } from "react-mdl/lib/Tabs";
import { View, ViewHeader, ViewContent } from "../../../../components/View";
import IconTextfield from "../../../../components/IconTextfield";
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
            <div className="create-event__content mdl-shadow--2dp">
                <Tabs activeTab={0}>
                    <Tab>Details</Tab>
                    <Tab>Sparrings</Tab>
                    <Tab>Tournaments</Tab>
                </Tabs>
                <div className="create-event__tab-wrapper">
                    <IconTextfield
                        onChange={() => {}}
                        label="Name"
                        icon="stars"
                        required
                        className="create-event__input"
                    />
                    <IconTextfield
                        onChange={() => {}}
                        label="Location"
                        icon="room"
                        required
                        className="create-event__input"
                    />
                    <IconTextfield
                        onChange={() => {}}
                        label="Description"
                        icon="info_outline"
                        className="create-event__input create-event__description"
                        rows={3}
                    />
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
