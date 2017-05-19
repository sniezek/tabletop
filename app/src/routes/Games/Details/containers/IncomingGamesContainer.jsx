import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getIncomingGames } from "../../../../store/games";
import IncomingEvents from "../components/IncomingEvents";

const propTypes = {
    router: PropTypes.object.isRequired,
    events: PropTypes.array.isRequired
};

const defaultProps = {
    events: []
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    getIncomingGames: dispatch(getIncomingGames({
        game: ownProps.router.params.name,
        startDate: new Date().getTime()
    }))
});

const mapStateToProps = state => ({
    events: state.games.eventsList
});
const enhance = connect(mapStateToProps, mapDispatchToProps);

class IncomingGamesContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.getIncomingGames = this.getIncomingGames.bind(this);
    }

    getIncomingGames() {
    }

    render() {
        return (
            <IncomingEvents events={this.props.events} />);
    }
}

IncomingGamesContainer.propTypes = propTypes;
IncomingGamesContainer.defaultProps = defaultProps;

export default enhance(IncomingGamesContainer);
