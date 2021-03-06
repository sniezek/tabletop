import moment from "moment";

const format = "MM-DD-YYYY";

const getCurrentDate = () => moment().format(format);

const mapLocationFilters = ({ active, radius, location }) => {
    const output = {};

    if (active && location !== null) {
        output.lat = location.lat;
        output.lng = location.lng;
        output.radius = radius;
    }

    return output;
};

const mapGamesFilters = ({ active, selected }) => {
    const output = {};

    if (active && selected.length > 0) {
        output.games = selected.map(({ id }) => id);
    }

    return output;
};

const mapTypeFilters = ({ active, type }) => {
    const output = {};

    if (active && ["sparring", "tournament"].includes(type)) {
        output.type = type;
    }

    return output;
};

const mapDateFilters = ({ active, from, to }) => {
    const output = {};

    if (active) {
        const parsedFrom = moment(from, format);
        const parsedTo = moment(to, format);

        if (parsedFrom.isValid()) {
            output.startDate = parsedFrom.unix() * 1000;
        }

        if (parsedTo.isValid()) {
            output.endDate = parsedTo.unix() * 1000;
        }
    }

    return output;
};

export { getCurrentDate, mapLocationFilters, mapGamesFilters, mapTypeFilters, mapDateFilters };
