import React, { useState, useEffect, useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import './Checkbox.css';

export const Checkbox = ({header, text, visible, ...props}) => {
  const [check, setCheck] = useState(() => {
    console.log('constructor');

    return false;
  });

  const element = useRef(false);

  const handleChange = () => {
    console.log('Changed');
    setCheck(!check);
  };

  const checkbox = useMemo(
      () => {
        element.current && console.log('shouldComponentUpdate');
        return (
            <input
                type="checkbox"
                onChange={handleChange}
                checked={check}
            />
        );
        // eslint-disable-next-line
      }, [check]
  );

  useEffect(() => {
    if(element.current) {
      console.log('componentDidUpdate');
    } else {
      console.log('componentDidMount');
      element.current = true;
    }

  }, [check]);

  useEffect(() => {
    return() => console.log('componentWillUnmount');
  }, [visible]);

  console.log('render');

  return (
      <div>
        <h1>{header}</h1>
        <h3>{text}: {check ? 'Checked' : 'Unchecked'}</h3>
        {checkbox}
      </div>
  );
};

Checkbox.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  visible: PropTypes.bool
};
