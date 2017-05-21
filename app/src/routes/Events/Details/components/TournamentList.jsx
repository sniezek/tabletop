import React from "react";
import pure from "recompose/pure";
import ListTournament from "./ListTournament.jsx";
import "./TournamentList.scss";

const enhance = pure;

const tournamentRows = (router, initialRound, showTournament, tournaments) => {

    const output = [];

    /* eslint-disable */
    tournaments.map((object, i) => {
        output.push(
            <ListTournament
                key={i}
                router={router}
                initialRound={initialRound}
                showTournament={showTournament}
                id={object.id}
                name={object.name}
                initialized={object.initialized}
            />
        )
    });

    return output;
};

const TournamentList = ({ router, initialRound, showTournament, tournaments }) => (
    <div className="events-list">
        <div className="events-list__wrapper">
            { tournamentRows(router, initialRound, showTournament, tournaments) }
        </div>
    </div>
);

export default enhance(TournamentList);
