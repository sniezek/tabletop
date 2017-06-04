import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { initialRound, showTournament } from "../../../../store/tournament";
import TournamentDemoPlay from "../components/TournamentDemoPlay.jsx";

const propTypes = {
    router: PropTypes.object.isRequired,
    demoId: PropTypes.number.isRequired,
    initialRound: PropTypes.func,
    showTournament: PropTypes.func,
    initialized: PropTypes.bool
};

const defaultProps = {
    initialRound: () => {},
    showTournament: () => {},
    initialized: false
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = dispatch => ({
    initialRound: (id, callback) => {
        dispatch(initialRound(id, callback));
    },
    showTournament: (id) => {
        dispatch(showTournament(id));
    }
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class TournamentDemoContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            initialized: this.props.initialized
        }
        this.initialRound = this.initialRound.bind(this);
        this.showTournament = this.showTournament.bind(this);
    }

    initialRound() {
        const tournamentId = this.props.demoId;
        this.props.initialRound(tournamentId, ({ ok }) => {
            this.setState({
                initialized: true
            });
        });
    }

    showTournament() {
        this.props.showTournament(this.props.demoId);
        this.props.router.push("/tournament");
    }


    render() {
        return (
            <TournamentDemoPlay
                router={this.props.router}
                initialRound={this.initialRound}
                showTournament={this.showTournament}
                initialized={this.state.initialized}
            />
        );
    }
}

TournamentDemoContainer.propTypes = propTypes;
TournamentDemoContainer.defaultProps = defaultProps;

export default enhance(TournamentDemoContainer);

