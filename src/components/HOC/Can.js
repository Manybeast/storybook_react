import React from 'react';

const higherOrderComponent = (WrapComponent) => {
  class Can extends React.Component {
    render() {
      return this.props.isAvailable ? <WrapComponent {...this.props} /> : <h1>You don't have access</h1>;
    }
  }
  return Can;
};

export default higherOrderComponent;
