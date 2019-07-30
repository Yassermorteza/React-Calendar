import React, { Component } from "react";
import Spinner from "react-spinkit";
import { connect } from 'react-redux';


import "./styles/app.scss";
import ErrorBoundary from './ErrorBoundary';

import Header from './components/Header';
import Calendar from './components/Calendar';
import Modal from './components/Modal';
import Reminder from './components/Reminder';

import { fetchReminders } from './actions/app';

export class App extends Component {

  state = {
    loading: true,
    today: undefined,
    currentMonth: undefined,
  }

  componentDidMount() {
    const { fetchReminders } = this.props;
    const url = "http://localhost:3000/reminders/";
    fetchReminders(url);
    this.setState({
      loading: false
    })
  }

  render() {
    const { loading } = this.state;
    const { isModalOpen } = this.props;

    if (loading) {
      return (
        <Spinner name="ball-spin-fade-loader" color="#00ffff" className="spinner" />
      );
    }

    return (
      <ErrorBoundary>
        {isModalOpen && 
          <Modal> 
            <Reminder />
          </Modal>
        }
        <Header /> 
        <Calendar />
      </ErrorBoundary>
    );
  }
}

export const mapStateToProps = state => ({
  isModalOpen: state.appReducer.isModalOpen,
});

const mapDispatchToProps = dispatch => ({
  fetchReminders: url => dispatch(fetchReminders(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
