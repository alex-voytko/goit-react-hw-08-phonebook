import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/contacts';

const Filter = ({ value, onChange }) => (
    <>
        <div className="filter-container">
            <label htmlFor="filter" className="form-label add-contact">
                Search Contact
            </label>
            <input
                value={value}
                name="filter"
                onChange={onChange}
                className="form-input filter"
            />
        </div>
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
