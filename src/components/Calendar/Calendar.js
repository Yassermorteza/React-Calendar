import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from "react-spinkit";

import Day from '../Day';
import { openModal as openReminderModal } from '../../actions/app';

import {
    WEEK_DAYS,
    DAYS_IN_WEEK,
    NUMBER_OF_DAYS,
    MONTH_FIRST_DAY,
} from '../../utils/constants';

import '../../styles/calendar.scss';

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
            this.setCalendar(nextProps.reminders);
        }
    }

    onSelectDay = (day, reminderId) => event => {
        const { openModal } = this.props;

        openModal(day, reminderId);
    }

    setCalendar = reminders => {
        const tdElements = [];

        if (reminders && !!reminders.length) {
            let counter = 0;

            const sortbyDate = (a, b) => {
                if (new Date(a.date) > new Date(b.date)) return 1;
                if (new Date(a.date) < new Date(b.date)) return -1;
                return 0;
            };

            reminders.sort(sortbyDate).forEach((element, index) => {
                const reminderDay = new Date(element.date).getDate();
                for (let i = 1; i <= NUMBER_OF_DAYS; i++) {
                    counter++;
                    const reminderId = reminderDay === counter ? element.id : null;
                    tdElements.push(<Day 
                        title={element.title}
                        counter={counter}
                        key={`${counter}_${i}`} 
                        reminderId={reminderId}
                        reminderDay={reminderDay}
                        onSelectDay={this.onSelectDay}
                    />);
                    if (counter === NUMBER_OF_DAYS) break;
                    if (reminderDay === counter && reminders.length > 1) { 
                        if(index === reminders.length - 1) {
                            continue;
                        } else {
                            break; 
                        }
                    }
                }
            });

        } else {

            for (let i = 1; i <= NUMBER_OF_DAYS; i++) {
                tdElements.push(<Day 
                    key={i}
                    onSelectDay={this.onSelectDay}
                />); 
            };

        }

        const orderedTdElements = [];
        let counter = 0;

        for (let i = 0; i < 6; i++) {
            orderedTdElements.push([])
            for (let j = 0; j < DAYS_IN_WEEK; j++) {
                if (i === 0 && j >= MONTH_FIRST_DAY || i > 0) {
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
                      {WEEK_DAYS.map(day => <th key={day}>{day}</th>)}  
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
    openModal: (day, reminderId) => dispatch(openReminderModal(day, reminderId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
