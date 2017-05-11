import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import GameDetailsContainer from "../containers/GameDetailsContainer.jsx";
import { View, ViewHeader } from "../../../components/View";
import "./Games.scss";

const propTypes = {
    router: PropTypes.object.isRequired
};

const enhance = pure;

export const GameDetailsView = ({ router }) => (
    <View className="games">
        <ViewHeader title="Game details" />
        <GameDetailsContainer router={router} />
    </View>
);


GameDetailsView.propTypes = propTypes;

export default enhance(GameDetailsView);
