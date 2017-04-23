import React from "react";
import "./TournamentResultsView.scss";

const FakeObjectData = require("./helpers/FakeObjectData");

const dataList = new FakeObjectData(10);


export const TournamentResultsView = () => (
    <div className="tournament-results-list">
        <h1>Tournament results </h1>
        {/* {dataList.getObjectAt(0).firstName}*/}
        <ol>
            {dataList.getAll().map((user, i) => <li key={i}>{user.firstName} {user.lastName} {user.points}</li>)}
        </ol>
    </div>
);

export default TournamentResultsView;
