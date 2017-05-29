import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import compose from "recompose/compose";
import { connect } from "react-redux";
import IconSelect from "../../components/IconSelect";

const propTypes = {
    label: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    data: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired
    })),
    value: PropTypes.string
};

const defaultProps = {
    label: "Game",
    data: [],
    value: null
};

const mapStateToProps = state => ({
    data: state.games.gamesList
});

const mapDispatchToProps = {};

const enhance = compose(
    pure,
    connect(mapStateToProps, mapDispatchToProps)
);

const GameSelect = ({ label, onChange, data, value }) => (
    <IconSelect
        label={label}
        icon="casino"
        resetLabel="No game"
        onChange={onChange}
        defaultValue={value}
        data={data}
    />
);

GameSelect.propTypes = propTypes;
GameSelect.defaultProps = defaultProps;

export default enhance(GameSelect);
