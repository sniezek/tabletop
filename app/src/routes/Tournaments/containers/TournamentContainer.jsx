import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import { connect } from "react-redux";
import Tournament from "../components/Tournament.jsx";


const propTypes = {
    loggedIn: PropTypes.bool
};

const defaultProps = {
    loggedIn: false
};

const enhance = pure;

class TournamentContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            tournamentTypesView: true
        };

        this.toggleTournamentTypesView = this.toggleTournamentTypesView.bind(this);
    }

    toggleTournamentTypesView(tournamentTypesView) {
        this.setState({
            tournamentTypesView
        });
    }

    render() {
        const { tournamentTypesView } = this.state;
        return (
            <Tournament
                tournamentTypesView={tournamentTypesView}
                toggleTournamentTypesView={toggleTournamentTypesView}
            />
        );
    }

}

TournamentContainer.propTypes = propTypes;
TournamentContainer.defaultProps = defaultProps;

export default enhance(TournamentContainer);
