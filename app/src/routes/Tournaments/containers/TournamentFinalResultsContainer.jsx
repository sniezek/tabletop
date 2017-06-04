import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFinalResults } from "../../../store/tournament";
import TournamentFinalResults from "../components/TournamentFinalResults";

const propTypes = {
    finalResults: PropTypes.array,
    tournamentId: PropTypes.number,
    getFinalResults: PropTypes.func
};

const defaultProps = {
    finalResults: [],
    tournamentId: 1,
    getFinalResults: () => {}
};

const mapDispatchToProps = dispatch => ({
    getFinalResults: (id, callback) => {
        dispatch(getFinalResults(id, callback));
    }
});

const mapStateToProps = state => ({
    finalResults: state.tournament.finalResults,
    tournamentId: 1
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

const initialState = {};

class TournamentFinalResultsContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.getFinalResults = this.getFinalResults.bind(this);
    }

    componentWillMount() {
        this.getFinalResults();
    }

    getFinalResults() {
        const tournamentId = this.props.tournamentId;
        this.props.getFinalResults(tournamentId, ({ ok }) => {
            if (!ok) {
                console.log("Fetching Final results failed");
            }
        });
    }

    render() {
        return (
            <TournamentFinalResults
                finalResults={this.props.finalResults}
                tournamentId={this.props.tournamentId}
            />
        );
    }

}

TournamentFinalResultsContainer.propTypes = propTypes;
TournamentFinalResultsContainer.defaultProps = defaultProps;

export default enhance(TournamentFinalResultsContainer);
