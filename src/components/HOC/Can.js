import React from 'react';

const higherOrderComponent = (WrapComponent) => {
  class Can extends React.Component {
    render() {
      const {children, isAvailable} = this.props;

      return isAvailable ? <WrapComponent children={children} /> : <h1>You don't have access</h1>;
    }
  }
  return Can;
};

export default higherOrderComponent;
