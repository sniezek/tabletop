import React, { PureComponent } from "react";
import pure from "recompose/pure";
import PropTypes from "prop-types";
import { Button, Card, CardTitle, CardText, CardActions } from "react-mdl/lib";
import "./Tournament.scss";
import TournamentProcessContainer from "../containers/TournamentProcessContainer";

const propTypes = {
    tournamentTypesList: PropTypes.array,
    playDemo: PropTypes.func
};

const defaultProps = {
    tournamentTypesList: []
};

const enhance = pure;

class TournamentTypes extends PureComponent {
    constructor(props) {
        super(props);
        this.playDemo = this.playDemo.bind(this);
        this.state = {
            demoView: false
        };
    }

    playDemo = () => {
        this.setState({
            demoView: true
        });
    };


    render() {
        return (
          <div>
            { this.state.demoView ? (
               <TournamentProcessContainer />
            ) : (
              <div className="tournament-list">
                {this.props.tournamentTypesList.map(tournament =>
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
                        <Button colored onClick={() => this.playDemo()}>Start demo</Button>
                      </CardActions>
                    </Card>
                  </section>
                )}
              </div>
            )
            }
          </div>
        );
    }
}

TournamentTypes.propTypes = propTypes;
TournamentTypes.defaultProps = defaultProps;

export default enhance(TournamentTypes);

