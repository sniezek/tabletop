import React from "react";
import PropTypes from "prop-types";
import Textfield from "react-mdl/lib/Textfield";
import Button from "react-mdl/lib/Button";
import EventsFilter from "./EventsFilter.jsx";
import "./DateFilter.scss";

const propTypes = {
    setActive: PropTypes.func,
    active: PropTypes.bool,
    from: PropTypes.string,
    to: PropTypes.string,
    setFrom: PropTypes.func,
    setTo: PropTypes.func,
    setPastDate: PropTypes.func,
    setFutureDate: PropTypes.func
};

const defaultProps = {
    setActive: () => {},
    active: false,
    from: undefined,
    to: undefined,
    setFrom: () => {},
    setTo: () => {},
    setPastDate: () => {},
    setFutureDate: () => {}
};

const pattern = "[0-9]{2}-[0-9]{2}-[0-9]{4}";

const DateFilter = ({ active, setActive, from, to, setFrom, setTo, setPastDate, setFutureDate }) => (
    <EventsFilter
        name="Date"
        id="date"
        active={active}
        setActive={setActive}
    >
        <div className="date-filter__range">
            <Textfield
                onChange={setFrom}
                label="From (dd-mm-yyyy)"
                pattern={pattern}
                floatingLabel
                value={from}
            />
            <Textfield
                onChange={setTo}
                label="To (dd-mm-yyyy)"
                pattern={pattern}
                floatingLabel
                value={to}
            />
        </div>
        <div>
            <span className="date-filter__actions">Quick actions:</span>
            <Button onClick={setPastDate}>Past events</Button>
            <Button onClick={setFutureDate}>Upcoming events</Button>
        </div>
    </EventsFilter>
);

DateFilter.propTypes = propTypes;
DateFilter.defaultProps = defaultProps;

export default DateFilter;
