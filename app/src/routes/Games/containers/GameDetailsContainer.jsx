import React, { PureComponent } from "react";
import { Card, CardTitle, CardText, CardActions, Grid, Cell } from "react-mdl/lib";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getGames } from "../../../store/games";

const propTypes = {
    gamesList: PropTypes.array
};

const defaultProps = {
    gamesList: []
};

const mapDispatchToProps = dispatch => ({
    getGames: getGames(dispatch)
});

const mapStateToProps = state => ({
    gamesList: state.games
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class GameDetailsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.getGames = this.getGames.bind(this);
    }

    getGames() {}

    buildHrefLink(name) {
        return `/games/${name}`;
    }
    render() {
        return (
            <div className="gamesList">
                {this.props.gamesList.map(({ name, description, minPlayers, maxPlayers, imageUrl }) =>
                    <Grid key={name}>
                        <Cell col={3} tablet={2} phone={4} style={{ margin: "0px" }}>
                            <Card shadow={0} style={{ background: `url(${imageUrl}) center / cover`, width: "100%", height: "100%" }} />
                        </Cell>
                        <Cell col={9} tablet={6} phone={4} style={{ margin: "0px" }}>
                            <Card
                                shadow={2} style={{ width: "100%" }}
                            >
                                <div>

                                    <CardTitle style={{ paddingLeft: "40px", paddingTop: "40px", paddingBottom: "0px" }}>
                                        {name}
                                    </CardTitle>

                                    <div className="gameSettings">
                                        <span><i className="material-icons">group</i> {minPlayers} - {maxPlayers} </span>
                                    </div>

                                    <CardText>
                                        {description}
                                    </CardText>


                                    <CardActions>
                                        <a href={this.buildHrefLink(name)} className="mdl-button">Details</a>
                                    </CardActions>

                                </div>
                            </Card>
                        </Cell>

                    </Grid>
        )}
            </div>
        );
    }
}

GameDetailsContainer.propTypes = propTypes;
GameDetailsContainer.defaultProps = defaultProps;

export default enhance(GameDetailsContainer);
