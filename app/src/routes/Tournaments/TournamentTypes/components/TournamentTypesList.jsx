import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import { Button, Card, CardTitle, CardText, CardActions } from "react-mdl/lib";
import "../../components/Tournament.scss";


const propTypes = {
    router: PropTypes.object.isRequired,
    tournamentTypesList: PropTypes.array,
    playDemo: PropTypes.func
};

const defaultProps = {
    tournamentTypesList: [],
    playDemo: () => {}
};

const enhance = pure;

const TournamentTypesList = ({ tournamentTypesList, playDemo }) => (
    <div className="tournament-list">
        {tournamentTypesList.map(tournament =>
            <section key={tournament.name}>
                <Card shadow={1} style={{ width: "1000px", margin: "auto" }}>
                    <CardTitle
                        style={{ color: "#aaa", height: "176px", background: tournament.pictureUrl }}
                    >
                        {tournament.name}
                    </CardTitle>
                    <CardText>
                        <h7 style={{ color: "#faa" }}>{tournament.eliminating ? "ELIMINATING  " : "NON-ELIMINATING"}</h7><br />
                        <h7>PLAYERS: {tournament.minPlayers} - {tournament.maxPlayers} </h7>
                    </CardText>
                    <CardText>
                        {tournament.description}
                    </CardText>
                    <CardActions>
                        <Button colored onClick={() => playDemo()}>Start demo</Button>
                    </CardActions>
                </Card>
            </section>
    )}
    </div>

);

TournamentTypesList.propTypes = propTypes;
TournamentTypesList.defaultProps = defaultProps;

export default enhance(TournamentTypesList);
