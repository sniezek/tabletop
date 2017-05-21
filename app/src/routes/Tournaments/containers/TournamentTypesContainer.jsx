import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTournamentTypes } from "../../../store/tournament";
import "../components/Tournament.scss";
import TournamentTypes from "../components/TournamentTypes";

const propTypes = {
    tournamentTypesList: PropTypes.array,
    playDemo: PropTypes.func
};

const defaultProps = {
    tournamentTypesList: [],
    playDemo: () => {}
};

const mapDispatchToProps = dispatch => ({
    getTournamentTypes: getTournamentTypes(dispatch)

});

const mapStateToProps = state => ({
    tournamentTypesList: state.tournament.tournamentTypesList
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class TournamentTypesContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = null;
        this.getTournamentTypes = this.getTournamentTypes.bind(this);
    }

    getTournamentTypes() {
    }

    render() {
        return (
            <TournamentTypes
                tournamentTypesList={this.props.tournamentTypesList}
                playDemo={this.playDemo}
            />
        );
    }

}

TournamentTypesContainer.propTypes = propTypes;
TournamentTypesContainer.defaultProps = defaultProps;

export default enhance(TournamentTypesContainer);

