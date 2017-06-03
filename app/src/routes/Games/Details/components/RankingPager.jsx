import React from "react";
import PropTypes from "prop-types";
import pure from "recompose/pure";
import Pager from "cs-react-pager";

const propTypes = {
    page: PropTypes.number.isRequired,
    setPage: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired
};

const enhance = pure;

const RankingPager = ({ setPage, page, total }) => (
    <Pager
        total={total}
        size={5}
        current={page}
        gotoPage={setPage}
        locale="en"
    />
);

RankingPager.propTypes = propTypes;

export default enhance(RankingPager);
