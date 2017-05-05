import PropTypes from "prop-types";
import compose from "recompose/compose";
import withState from "recompose/withState";
import pure from "recompose/pure";

const propTypes = {
    children: PropTypes.func.isRequired,
    reveal: PropTypes.func,
    revealed: PropTypes.bool,
    items: PropTypes.array.isRequired,
    limit: PropTypes.number.isRequired
};

const defaultProps = {
    reveal: () => {},
    revealed: false
};

const enhance = compose(
    withState("revealed", "reveal", false),
    pure
);

const Reveal = ({ children, revealed, reveal, items, limit }) => (
    revealed || (items.length <= limit + 1)
    ? children({
        revealed: true,
        reveal: () => reveal(true),
        items,
        left: 0
    })
    : children({
        revealed: false,
        reveal: () => reveal(true),
        items: items.slice(0, limit),
        left: items.length - limit
    })
);

Reveal.propTypes = propTypes;
Reveal.defaultProps = defaultProps;

export default enhance(Reveal);
