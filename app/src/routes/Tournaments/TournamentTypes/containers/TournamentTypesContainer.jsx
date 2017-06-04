import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getTournamentTypes } from "../../../../store/tournament";
import "../../components/Tournament.scss";
import TournamentTypesList from "../components/TournamentTypesList";

const propTypes = {
    tournamentTypesList: PropTypes.array,
    router: PropTypes.object.isRequired,
    redirectToDemo: PropTypes.func,
    getTournamentTypes: PropTypes.func
};

const defaultProps = {
    tournamentTypesList: [],
    redirectToDemo: () => {},
    getTournamentTypes: () => {}
};

const mapDispatchToProps = dispatch => ({
    getTournamentTypes: (callback) => {
        dispatch(getTournamentTypes(callback));
    }
});

const mapStateToProps = state => ({
    tournamentTypesList: state.tournament.tournamentTypesList
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class TournamentTypesContainer extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            demoView: false
        };
        this.getTournamentTypes = this.getTournamentTypes.bind(this);
        this.redirectToDemo = this.redirectToDemo.bind(this);
    }

    componentWillMount() {
        this.getTournamentTypes();
    }

    getTournamentTypes() {
        this.props.getTournamentTypes(({ ok }) => {
            if (!ok) {
                console.log("Fetching Final results failed");
            }
        });
    }

    redirectToDemo = (id) => {
        this.props.router.push(`/tournament/demo/${id}`);
    };

    render() {
        return (
            <TournamentTypesList
                tournamentTypesList={this.props.tournamentTypesList}
                router={this.props.router}
                redirectToDemo={this.redirectToDemo}
            />
        );
    }
}

TournamentTypesContainer.propTypes = propTypes;
TournamentTypesContainer.defaultProps = defaultProps;

export default enhance(TournamentTypesContainer);

