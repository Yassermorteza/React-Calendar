import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Spinner from "react-spinkit";

import "./styles/app.scss";
import ErrorBoundary from './ErrorBoundary';

import Header from './components/Header';
import Calendar from './components/Calendar';

export class App extends Component {

  state = {
    loading: true,
    today: undefined,
    currentMonth: undefined,
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
        <Header /> 
        <Calendar />
      </ErrorBoundary>
    );
  }
}

export default App;
