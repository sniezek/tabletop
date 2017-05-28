import React,{ PureComponent} from "react";
import PropTypes from "prop-types";
import Button from "react-mdl/lib/Button";
import "./ListTournament.scss";

const propTypes = {
  id: PropTypes.number.isRequired,
  initialRound: PropTypes.func.isRequired,
  showTournament: PropTypes.func.isRequired,
  initialized: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  router: PropTypes.object.isRequired
};

const defaultProps = {};

class ListTournament extends PureComponent {
  constructor(props) {
    super(props);
    this.initialRound = this.initialRound.bind(this);
    this.show = this.show.bind(this);
    this.state = {
      initialized: this.props.initialized
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      initialized: nextProps.initialized
    });
  }

  initialRound() {
    const tournamentId = this.props.id;
    this.props.initialRound(tournamentId, ({ok}) => {
      this.setState({
        initialized: true
      });
    });
  }

  show() {
    this.props.showTournament(this.props.id);
    const {router} = this.props;
    router.push(`/tournament`);
  }

  render() {
    return <div className={"list-event"}>
      <div>
        {this.props.name}
      </div>
      { this.state.initialized ?
        <Button colored type='button' onClick={this.show}>Show tournament</Button>
        :
        <Button colored type='button' onClick={this.initialRound}>Init tournament</Button>
      }
    </div>
  }
}

ListTournament.propTypes = propTypes;
ListTournament.defaultProps = defaultProps;

export default ListTournament;
