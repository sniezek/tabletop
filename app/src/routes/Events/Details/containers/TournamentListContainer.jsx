import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {initialRound, getTournaments, showTournament} from "../../../../store/tournament";
import TournamentList from "../components/TournamentList.jsx";

const propTypes = {
  router: PropTypes.object.isRequired,
  initialRound: PropTypes.func.isRequired,
  getTournaments: PropTypes.func.isRequired,
  showTournament: PropTypes.func.isRequired,
  tournaments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    initialized: PropTypes.bool.isRequired
  }))
};

const defaultProps = {};

const mapStateToProps = ({tournament}) => ({
  tournaments: tournament.tournaments
});

const mapDispatchToProps = dispatch => ({
  initialRound: (id, callback) => {
    dispatch(initialRound(id, callback));
  },
  getTournaments: (id) => {
    dispatch(getTournaments(id));
  },
  showTournament: (id) => {
    dispatch(showTournament(id));
  }
});

const initialState = {};

class TournamentListContainer extends PureComponent {
  constructor(props) {
    super(props);
    this.getTournaments = this.getTournaments.bind(this);
    this.state = Object.assign({}, initialState);
  }

  componentDidMount() {
    this.getTournaments();
  }

  getTournaments() {
    this.props.getTournaments(this.props.router.params.id)
  }

  render() {
    return (
      <TournamentList
        router={this.props.router}
        initialRound={this.props.initialRound}
        showTournament={this.props.showTournament}
        tournaments={this.props.tournaments}
      />
    );
  }
}

TournamentListContainer.propTypes = propTypes;
TournamentListContainer.defaultProps = defaultProps;

export default connect(mapStateToProps, mapDispatchToProps)(TournamentListContainer);
