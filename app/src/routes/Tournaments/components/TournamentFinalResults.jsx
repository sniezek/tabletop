import React, { PureComponent } from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import { List, ListItem, ListItemContent, Card } from "react-mdl/lib";
import "./TournamentFinalResults.scss";
import "./Tournament.scss";


const propTypes = {
    finalResults: PropTypes.array,
    tournamentId: PropTypes.number,
    getFinalResults: PropTypes.func
};

const defaultProps = {
    finalResults: [],
    tournamentId: 1,
    getFinalResults: () => {}
};

const enhance = pure;

class TournamentFinalResults extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="tournament-list">
              <h1>Tournament Final Results</h1>
              <Card shadow={1} style={{ width: "1000px", margin: "auto" }}>
                <List>
                    {this.props.finalResults.map(result =>
                        <ListItem twoLine key={result.id}>
                            <h3 className="placeHeader">{result.place}</h3>
                            <ListItemContent
                                subtitle={`${result.points} points`}
                            >
                                {result.user.username}
                            </ListItemContent>
                        </ListItem>
                )}
                </List>
              </Card>
            </div>
        );
    }

}

TournamentFinalResults.propTypes = propTypes;
TournamentFinalResults.defaultProps = defaultProps;

export default enhance(TournamentFinalResults);
