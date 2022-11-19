import React, { Component } from 'react';

export class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = { hasError: false };
  }
  componentDidCatch(error) {
    console.log(error);
    this.setState({ hasError: true });
  }
  render() {
    if (this.state.hasError) {
      <p>Something went wrong!</p>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
