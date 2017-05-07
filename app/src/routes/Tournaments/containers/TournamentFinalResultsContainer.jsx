import React, { Component } from "react";
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

const enhance = connect(mapStateToProps, mapDispatchToProps);

class TournamentFinalResultsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = null;
        this.getFinalResults = this.getFinalResults.bind(this);
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
                <ol>
                    {this.props.finalResults.map(result => <li>{result.id} {result.user.name}</li>)}
                </ol>
            </div>
        );
    }

}

TournamentFinalResultsContainer.propTypes = propTypes;
TournamentFinalResultsContainer.defaultProps = defaultProps;

export default enhance(TournamentFinalResultsContainer);
