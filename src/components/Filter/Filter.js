import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/contacts';

const Filter = ({ value, onChange }) => (
    <>
        <label htmlFor="filter" className="label search">
            Search Contact
        </label>
        <input
            value={value}
            name="filter"
            onChange={onChange}
            className="input"
        />
    </>
);

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    value: getFilter(state),
});
const mapDispatchToProps = dispatch => ({
    onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
