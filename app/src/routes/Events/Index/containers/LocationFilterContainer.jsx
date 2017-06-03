import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setFilterLocationRadius, setFilterActive, setFilterLocationPlace } from "../modules/FilterActions";
import LocationFilter from "../components/filters/LocationFilter.jsx";

const propTypes = {
    location: PropTypes.object,
    setLocation: PropTypes.func.isRequired
};

const defaultProps = {
    location: null
};

const mapStateToProps = ({ locationFilter }) => locationFilter;
const mapDispatchToProps = dispatch => ({
    setRadius: ev => dispatch(setFilterLocationRadius(parseInt(ev.target.value, 10))),
    setActive: ev => dispatch(setFilterActive("location", ev.target.checked)),
    setLocation: place => dispatch(setFilterLocationPlace(place))
});

const enhance = connect(mapStateToProps, mapDispatchToProps);

class LocationFilterContainer extends PureComponent {
    constructor(props) {
        super(props);

        this.geosuggest = null;
        this.setRef = this.setRef.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    setRef(geosuggest) {
        this.geosuggest = geosuggest;
    }

    clearInput(value) {
        const { location } = this.props;

        if (location !== null && location.label !== value) {
            this.geosuggest.clear();
            this.props.setLocation(null);
        }
    }

    render() {
        return (
            <LocationFilter
                {...this.props}
                clearInput={this.clearInput}
                setRef={this.setRef}
            />
        );
    }
}

LocationFilterContainer.propTypes = propTypes;
LocationFilterContainer.defaultProps = defaultProps;

export default enhance(LocationFilterContainer);
