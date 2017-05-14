import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tab, Tabs } from "react-mdl/lib";
import { getGameDetails } from "../../../store/games";
import GameDetails from "../components/GameDetails";
import GameRanking from "../components/GameRanking";
import IncomingEvents from "../components/IncomingEvents";

const propTypes = {
    game: PropTypes.object,
    router: PropTypes.object.isRequired
};

const defaultProps = {
    game: null
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getGameDetails: dispatch(getGameDetails(ownProps.router.params.name))
});

const mapStateToProps = state => ({
    game: state.games.game
});
const enhance = connect(mapStateToProps, mapDispatchToProps);

class GameDetailsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.getGameDetails = this.getGameDetails.bind(this);
        this.state = { activeTab: 0 };
    }

    getGameDetails() {
    }

    render() {
        return (
            <div>
                <Tabs
                    style={{ backgroundColor: "white", marginTop: "5px" }}
                    activeTab={this.state.activeTab}
                    onChange={tabId => this.setState({ activeTab: tabId })}
                >
                    <Tab>
                        Details
                    </Tab>
                    <Tab>
                        Rankings
                    </Tab>
                    <Tab>
                        Incoming events
                    </Tab>
                </Tabs>
                <section>
                    <div className="content"> {
                      function () {
                          if (this.state.activeTab === 0) {
                              return (<GameDetails game={this.props.game} />);
                          } else if (this.state.activeTab === 1) {
                              return (<GameRanking ranking={this.props.game} />);
                          }
                          return (<IncomingEvents eventsList={this.props.game} />);
                      }.call(this)
                    }
                    </div>
                </section>
            </div>
        );
    }
}

GameDetailsContainer.propTypes = propTypes;
GameDetailsContainer.defaultProps = defaultProps;

export default enhance(GameDetailsContainer);
