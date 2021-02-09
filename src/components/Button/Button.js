import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export const Button = ({ buttonType, children, className, backgroundColor, clickHandler, ...props }) => (
    <button
        className={`button ${buttonType} ${className}`}
        style={backgroundColor && { backgroundColor }}
        onClick={clickHandler}
        {...props}
    >
          {children}
    </button>
);

Button.propTypes = {
  buttonType: PropTypes.string,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  clickHandler: PropTypes.func
};

Button.defaultProps = {
  buttonType: 'primary',
  children: null,
  backgroundColor: null,
  clickHandler: null
};

