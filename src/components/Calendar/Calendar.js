import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from "react-spinkit";

import { openModal as openReminderModal } from '../../actions/app';

import '../../styles/calendar.scss';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


class Calendar extends Component {

    state = {
        calendarElements: undefined
    }

    componentDidMount() {
        const { calendarElements } = this.state;

        if (!calendarElements) {
            this.setCalendar();
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        const { reminders } = this.props;
        if (reminders.length !== nextProps.reminders.length) {
            this.setCalendar();
        }

    }

    selectDay = day => () => {
        const { openModal } = this.props;
        openModal(day)

    }

    setCalendar = () => {
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        const numberOfDays = new Date(year, month+1, 0).getDate();
        const firstDay = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
        const day = date.getUTCDate();
        const tdElements = [];

        const { reminders } = this.props;
        const remindersDate  = [];
        if (!!reminders.length) {
            reminders.forEach(element => {
                remindersDate.push(element.date) // my final code time is over
            });
        }

        for(let i = 1; i <= numberOfDays; i++) {
            tdElements.push(<td key={i} onClick={this.selectDay(i)}><div><p className={day === i ? "today-style" : "day-style"} >{i}</p></div></td>); 
        }

        const orderedTdElements = [];
        let counter = 0;

        for(let i = 0; i <= 6; i++) {
            orderedTdElements.push([])
            for(let j = 0; j <= 6; j++) {
                if (i === 0 && j >= firstDay) {
                    orderedTdElements[i].push(tdElements[counter++]); 
                } else if (i > 0 ) {
                    orderedTdElements[i].push(tdElements[counter++]); 
                } else {
                    orderedTdElements[i].push(<td key={`${i}_${j}`}></td>); 
                }
            }
        }

        this.setState({
            calendarElements: orderedTdElements
        })
    }

    render() {
        const { calendarElements } = this.state;

        if (!calendarElements) {
            return (
                <Spinner name="ball-spin-fade-loader" color="#00ffff" className="spinner" />
            );
        }

        return(
            <table>
                <thead>
                    <tr>
                      {weekDays.map(day => <th key={day}>{day}</th>)}  
                    </tr>
                </thead>
                <tbody>
                   {calendarElements.map((element, index) => 
                        (<tr key={`${element}_${index}`}>
                            {element}
                        </tr>)
                   )} 
                </tbody>
            </table>
        )
    }
};

export const mapStateToProps = state => ({
    reminders: state.appReducer.reminders,
});

export const mapDispatchToProps = dispatch => ({
    openModal: day => dispatch(openReminderModal(day))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);