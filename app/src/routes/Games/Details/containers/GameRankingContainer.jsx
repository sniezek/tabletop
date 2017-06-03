import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Grid, Cell } from "react-mdl/lib";
import { getGameRanking, getPagesQuantity } from "../../../../store/games";
import GameRanking from "../components/GameRanking";
import RankingPager from "../components/RankingPager";

const propTypes = {
    router: PropTypes.object.isRequired,
    gameRankingList: PropTypes.array,
    pagesQuantity: PropTypes.number.isRequired
};

const contextTypes = { store: React.PropTypes.object };

const defaultProps = {
    gameRankingList: [],
    pagesQuantity: 1
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getGameRanking: dispatch(getGameRanking(ownProps.router.params.name, 1)),
    getPagesQuantity: dispatch(getPagesQuantity(ownProps.router.params.name))
});

const mapStateToProps = state => ({
    gameRankingList: state.games.gameRankingList,
    pagesQuantity: state.games.pagesQuantity
});
const enhance = connect(mapStateToProps, mapDispatchToProps);

class GameRankingContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.getGameRanking = this.getGameRanking.bind(this);
        this.getPagesQuantity = this.getPagesQuantity.bind(this);
        this.state = {
            page: 1
        };
        this.gotoPage = this.gotoPage.bind(this);
    }

    getGameRanking() {
    }

    getPagesQuantity() {

    }

    gotoPage(page) {
        this.setState({
            page
        });
        this.context.store.dispatch(getGameRanking(this.props.router.params.name, page));
    }

    render() {
        const page = this.state.page;
        return (
            <div>
                <Grid>
                    <Cell className="rankingContainer" shadow={1} col={8}>
                        <GameRanking ranking={this.props.gameRankingList} page={page} />
                        <RankingPager setPage={this.gotoPage} page={page} total={this.props.pagesQuantity} />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

GameRankingContainer.propTypes = propTypes;
GameRankingContainer.defaultProps = defaultProps;
GameRankingContainer.contextTypes = contextTypes;

export default enhance(GameRankingContainer);
