import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Cell } from "react-mdl/lib";
import Pager from "cs-react-pager";
import { getGameRanking } from "../../../../store/games";
import GameRanking from "../components/GameRanking";

const propTypes = {
    router: PropTypes.object.isRequired,
    gameRankingList: PropTypes.array
};

const defaultProps = {
    gameRankingList: []
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getGameRanking: dispatch(getGameRanking(ownProps.router.params.name))
});

const mapStateToProps = state => ({
    gameRankingList: state.games.gameRankingList
});
const enhance = connect(mapStateToProps, mapDispatchToProps);

class GameRankingContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.getGameRanking = this.getGameRanking.bind(this);
        this.state = {
            current: 1
        };
        this.gotoPage = this.gotoPage.bind(this);
    }

    getGameRanking() {
    }

    gotoPage(page) {
        this.setState({
            current: page
        });
    }

    render() {
        return (
            <div>
                <Grid>
                    <Cell className="rankingContainer" shadow={1} col={8}>
                        <GameRanking ranking={this.props.gameRankingList} />
                        <Pager
                            total={300}
                            current={this.state.current}
                            gotoPage={this.gotoPage}
                            locale="en"
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

GameRankingContainer.propTypes = propTypes;
GameRankingContainer.defaultProps = defaultProps;

export default enhance(GameRankingContainer);
