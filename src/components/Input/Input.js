import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

export const Input = ({ size, ...props }) => (
    <input
        className={`input ${size}`}
        placeholder={`${size} input`}
        {...props}
    />
);

Input.propTypes = {
    size: PropTypes.string,
};

Input.defaultProps = {
    size: 'medium',
};
