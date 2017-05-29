import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { View, ViewHeader, ViewContent } from "../../../../components/View";

const propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string
};

const defaultProps = {
    name: "Loading..."
};

const mapDispatchToProps = {};

const mapStateToProps = ({ event }) => ({
    ...event
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class EventDetailsContainer extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.id);
    }

    render() {
        const { name, id } = this.props;

        return (
            <View>
                <ViewHeader
                    title={name}
                />
                <ViewContent>
                    {id}
                </ViewContent>
            </View>
        );
    }
}

EventDetailsContainer.propTypes = propTypes;
EventDetailsContainer.defaultProps = defaultProps;

export default enhance(EventDetailsContainer);
