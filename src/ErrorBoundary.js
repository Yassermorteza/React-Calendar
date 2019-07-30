import React, { Component } from 'react';

class ErrorBoundary extends Component {

  state = { hasError: false }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (<div className="Eorro-boundary_message">
        <span>Something went wrong. Please check your internet connection and contact support.</span>
      </div>);
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
