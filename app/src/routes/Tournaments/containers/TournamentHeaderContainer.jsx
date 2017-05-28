import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import TournamentHeader from "../components/TournamentHeader";

const propTypes = {
    router: PropTypes.object.isRequired,
    title: PropTypes.string
};

const defaultProps = {
    title: "Tournaments"
};

const enhance = pure;

class TournamentHeaderContainer extends PureComponent {
    constructor(props) {
        super(props);
        this.redirectToTournamentTypes = this.redirectToTournamentTypes.bind(this);
    }

    redirectToTournamentTypes() {
        this.props.router.push("/tournament/types");
    }

    render() {
        return (
            <TournamentHeader
                redirectToTournamentTypes={this.redirectToTournamentTypes}
                title={this.props.title}
            />
        );
    }
}

TournamentHeaderContainer.propTypes = propTypes;
TournamentHeaderContainer.defaultProps = defaultProps;

export default enhance(TournamentHeaderContainer);

