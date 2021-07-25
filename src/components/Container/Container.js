import React from 'react';
import PropTypes from 'prop-types';

const Container = ({ className, children }) => (
    <div className={className}>{children}</div>
);

Container.defaultProps = {
    children: null,
};

Container.propTypes = {
    className: PropTypes.string.isRequired,
    children: PropTypes.any,
};

export default Container;
