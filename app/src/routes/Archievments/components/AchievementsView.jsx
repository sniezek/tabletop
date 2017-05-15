import React from "react";
import AchievementsContainer from "../containers/AchievementsContainer.jsx";
import AchievementsHeader from "./AchievementsHeader";
import "./achievements.scss";

export const AchievementsView = () => (
    <div className="achievements">
        <AchievementsHeader/>
        <AchievementsContainer/>
    </div>
);

export default AchievementsView;
