import React from 'react';

const ErrorHandlerComponent = (WrapComponent) => {
  class ErrorHandler extends React.Component {

    render() {
      return !this.props.hasError ? (
          <WrapComponent {...this.props} />
        ) : (
          <h1>Some component has render error</h1>
      );
    }
  }
  return ErrorHandler;
};

export default ErrorHandlerComponent;
