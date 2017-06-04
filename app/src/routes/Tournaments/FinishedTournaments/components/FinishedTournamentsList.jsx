import React from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import { List, ListItem, ListItemContent, Card } from "react-mdl/lib";
import "../../components/Tournament.scss";

const propTypes = {
    router: PropTypes.object.isRequired,
    finishedTournamentsList: PropTypes.array
};

const defaultProps = {
    finishedTournamentsList: []
};

const enhance = pure;

const FinishedTournamentsList = ({ router, finishedTournamentsList }) => (
    <div>
        <h2 />
        <Card shadow={1} style={{ width: "1000px", margin: "auto" }}>
            <List>
                {finishedTournamentsList.map(tournament =>
                    <ListItem key={tournament.id}>
                        <ListItemContent>
                            {tournament.id} {tournament.name}
                        </ListItemContent>
                    </ListItem>
          )}
            </List>
        </Card>
    </div>
);

FinishedTournamentsList.propTypes = propTypes;
FinishedTournamentsList.defaultProps = defaultProps;

export default enhance(FinishedTournamentsList);

