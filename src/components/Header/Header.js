import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import './Header.css';

export const Header = ({ position, buttonType, backgroundColor, ...props }) => (
    <div className={`header ${position}`} {...props}>
      <Button className={'item'} buttonType={buttonType} backgroundColor={backgroundColor}>First</Button>
      <Button className={'item'} buttonType={buttonType} backgroundColor={backgroundColor}>Second</Button>
      <Button className={'item'} buttonType={buttonType} backgroundColor={backgroundColor}>Last</Button>
    </div>
);

Header.propTypes = {
  position: PropTypes.string,
  buttonType: PropTypes.string,
};

Header.defaultProps = {
  position: 'left',
  buttonType: 'primary',
  backgroundColor: null
};

