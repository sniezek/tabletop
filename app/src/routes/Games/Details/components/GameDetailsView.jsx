import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import GameInfoContainer from "../containers/GameInfoContainer.jsx";
import { View, ViewHeader } from "../../../../components/View/index";
import "../../Index/components/Games.scss";

const propTypes = {
    router: PropTypes.object.isRequired
};

const enhance = pure;

export const GameDetailsView = ({ router }) => (
    <View className="games">
        <ViewHeader title="Game details" />
        <GameInfoContainer router={router} />
    </View>
);


GameDetailsView.propTypes = propTypes;

export default enhance(GameDetailsView);
