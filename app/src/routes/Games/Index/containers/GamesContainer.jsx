import React, { PureComponent } from "react";
import { Card, CardTitle, CardText, CardActions, Grid, Cell } from "react-mdl/lib";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const propTypes = {
    gamesList: PropTypes.array
};

const defaultProps = {
    gamesList: []
};

const mapDispatchToProps = {};

const mapStateToProps = state => ({
    gamesList: state.games.gamesList
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class GamesContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.getGames = this.getGames.bind(this);
    }

    getGames() {
    }

    buildHrefLink(name) {
        let nameURL = name.replace(/ /g, "_");
        nameURL = nameURL.replace(/[!@#$%^&*()+=:;'"><.,]/g, "");
        return `/games/${nameURL}`;
    }

    formatNumberOfPlayers(minPlayers, maxPlayers) {
        if (minPlayers === maxPlayers) {
            return maxPlayers;
        } else if (maxPlayers === -1) {
            return `${minPlayers}+`;
        }
        return `${minPlayers} - ${maxPlayers}`;
    }

    render() {
        return (
            <div className="gamesList">
                {this.props.gamesList.map(({ name, description, minPlayers, maxPlayers, imageUrl }) =>
                    <Grid key={name} noSpacing style={{ margin: "10px auto", maxWidth: "1024px" }}>
                        <Cell col={3} tablet={2} phone={4} className="margin0">
                            <Card
                                shadow={0}
                                style={{ background: `url(${imageUrl}) center / cover`, width: "100%", height: "100%" }}
                                className="minWidth200"
                            />
                        </Cell>
                        <Cell col={9} tablet={6} phone={4} className="margin0">
                            <Card
                                shadow={2}
                                style={{ width: "100%" }}
                            >
                                <div>

                                    <CardTitle className="gameListTitle">
                                        {name}
                                    </CardTitle>

                                    <div className="gameSettings">
                                        <span><i className="material-icons">group</i>{ this.formatNumberOfPlayers(minPlayers, maxPlayers) }</span>
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

GamesContainer.propTypes = propTypes;
GamesContainer.defaultProps = defaultProps;

export default enhance(GamesContainer);
