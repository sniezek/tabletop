import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "react-mdl/lib/Spinner";
import Api from "../../../../api";
import CreateEventFormContainer from "../../CreateEvent/containers/CreateEventFormContainer.jsx";
import { loadEvent } from "../../Index/modules/EventActions";

const propTypes = {
    router: PropTypes.object.isRequired,
    id: PropTypes.number.isRequired,
    event: PropTypes.object,
    loadDetails: PropTypes.func.isRequired
};

const defaultProps = {
    event: null
};

const mapDispatchToProps = dispatch => ({
    loadDetails: id => loadEvent(id)(dispatch)
});

const mapStateToProps = ({ event }) => ({
    event
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EditEventFormContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { id, loadDetails } = this.props;

        loadDetails(id);
    }

    render() {
        const { router, event } = this.props;

        return event ? (
            <CreateEventFormContainer
                router={router}
                id={parseInt(router.params.id, 10)}
                event={event}
            />
        ) : (
            <Spinner />
        );
    }
}

EditEventFormContainer.propTypes = propTypes;
EditEventFormContainer.defaultProps = defaultProps;

export default enhance(EditEventFormContainer);
