import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getFinalResults } from "../../../store/tournament";

const propTypes = {
    finalResults: PropTypes.array,
    tournamentId: PropTypes.number,
    getFinalResults: PropTypes.func
};

const defaultProps = {
    finalResults: [],
    tournamentId: 1
};

const mapDispatchToProps = dispatch => ({
    getFinalResults: (id, callback) => {
        dispatch(getFinalResults(id, callback));
    }
});

const mapStateToProps = (state) => {
    if (state.tournament !== null) {
        return {
            finalResults: state.tournament.finalResults,
            tournamentId: 1
        };
    }
    return {
        finalResults: [],
        tournamentId: 1
    };
};
const initialState = {};
// const enhance = connect(mapStateToProps, mapDispatchToProps);

class TournamentFinalResultsContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = Object.assign({}, initialState);

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
            <div>
                <h1>Tournament Final Results</h1>
                <ul><h5>
                    {this.props.finalResults.map(result => <li key={result.id}>{result.place} {result.user.username} {result.points}</li>)}
                </h5></ul>
            </div>
        );
    }

}

TournamentFinalResultsContainer.propTypes = propTypes;
TournamentFinalResultsContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(TournamentFinalResultsContainer);
