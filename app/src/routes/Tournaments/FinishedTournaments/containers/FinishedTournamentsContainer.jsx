import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "../../components/Tournament.scss";
import "../../components/TournamentFinalResults.scss";
import { getFinishedTournaments } from "../../../../store/tournament";
import FinishedTournamentsList from "../components/FinishedTournamentsList";

const propTypes = {
    finishedTournamentsList: PropTypes.array,
    router: PropTypes.object.isRequired,
    getFinishedTournaments: PropTypes.func
};

const defaultProps = {
    finishedTournamentsList: [],
    getFinishedTournaments: () => {}
};

const mapDispatchToProps = dispatch => ({
    getFinishedTournaments: (callback) => {
        dispatch(getFinishedTournaments(callback));
    }
});

const mapStateToProps = state => ({
    finishedTournamentsList: state.tournament.finishedTournamentsList
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class FinishedTournamentsContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.getFinishedTournaments = this.getFinishedTournaments.bind(this);
    }

    componentWillMount() {
        this.getFinishedTournaments();
    }

    getFinishedTournaments() {
        this.props.getFinishedTournaments(({ ok }) => {
            if (!ok) {
                console.log("Fetching Final results failed");
            }
        });
    }

    render() {
        return (
            <FinishedTournamentsList
                router={this.props.router}
                finishedTournamentsList={this.props.finishedTournamentsList}
            />
        );
    }
}

FinishedTournamentsContainer.propTypes = propTypes;
FinishedTournamentsContainer.defaultProps = defaultProps;

export default enhance(FinishedTournamentsContainer);
