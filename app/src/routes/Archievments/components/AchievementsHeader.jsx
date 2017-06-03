/**
 * Created by ja on 07.05.17.
 */
import React from "react";
import pure from "recompose/pure";
import { ViewHeader } from "../../../components/View";

const enhance = pure;

const AchievementsHeader = () => (
    <ViewHeader
        title="User Archievments"
    />
);


export default enhance(AchievementsHeader);
