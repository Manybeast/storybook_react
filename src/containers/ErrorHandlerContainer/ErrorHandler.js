import React, { Component } from 'react';
import ErrorHandler from '../../components/ErrorHandler/ErrorHandler';
import { Header } from '../../components/Header/Header';

const HeaderErrorHandler = ErrorHandler(Header);

export class HeaderComponent extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false
    }
  }

  componentDidCatch() {
    this.setState({ hasError: true });
    console.log('Some component has render error');
  }

  render() {
    return (
        <HeaderErrorHandler
            hasError={this.state.hasError}
        />
    );
  }
}
