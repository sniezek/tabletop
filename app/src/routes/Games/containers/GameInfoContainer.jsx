import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Tab, Tabs } from "react-mdl/lib";
import GameDetailsContainer from "../containers/GameDetailsContainer";
import GameRankingContainer from "../containers/GameRankingContainer";
import IncomingGamesContainer from "../containers/IncomingGamesContainer";

const propTypes = {
    router: PropTypes.object.isRequired
};

const defaultProps = {
};

const mapDispatchToProps = () => ({
});

const mapStateToProps = () => ({
});
const enhance = connect(mapStateToProps, mapDispatchToProps);

class GameInfoContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
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
            Ranking
          </Tab>
                    <Tab>
            Incoming events
          </Tab>
                </Tabs>
                <section>
                    <div className="content"> {
            function () {
                if (this.state.activeTab === 0) {
                    return (<GameDetailsContainer router={this.props.router} />);
                } else if (this.state.activeTab === 1) {
                    return (<GameRankingContainer router={this.props.router} />);
                }
                return (<IncomingGamesContainer router={this.props.router} />);
            }.call(this)
          }
                    </div>
                </section>
            </div>
        );
    }
}

GameInfoContainer.propTypes = propTypes;
GameInfoContainer.defaultProps = defaultProps;

export default enhance(GameInfoContainer);
