import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Spinner from "react-spinkit";

import "./styles/app.scss";
import ErrorBoundary from './ErrorBoundary';

export class App extends Component {

  state = {
    loading: true,
  }

  componentDidMount() {

    this.setState({
      loading: false
    })
  }

  render() {
    const { loading } = this.state;

    if (loading) {
      return (
        <Spinner name="ball-spin-fade-loader" color="#00ffff" className="spinner" />
      );
    }

    return (
      <ErrorBoundary>
        <Router>
          <div>React Redux Boilerplate</div>
        </Router>
      </ErrorBoundary>
    );
  }
}

export default App;
