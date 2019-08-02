import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeModal, fetchReminders } from '../../actions/app';


import { REMINDERS_URL, CURRENT_MONTH, CURRENT_YEAR } from '../../utils/constants';


class AddReminder extends Component {

    state = {
        hasReminderTitle: true,
    }

    saveReminder = date => () => {

        const { closeModal, fetchReminders, reminderId, reminders } = this.props;

        if (!reminderId) {
            const title = this.input.value || "No title";
            // const reminderTitles = reminders && !!reminders.length && reminderId && reminders.find(reminder =>  reminder.id === reminderId);

            const reminder = { date, title};

            const options = {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(reminder)
            };

            fetch(REMINDERS_URL, options)
                .then(res => res.json())
                .then(data => {
                    fetchReminders(REMINDERS_URL);
                    closeModal();
                })
                .catch(err => console.log(err));
        } else {
            closeModal();
        }
    }

    render() {
        const { selectedDay } = this.props
        const reminderDate = `${CURRENT_YEAR}/${CURRENT_MONTH}/${selectedDay}`;
        
        return(
            <>
                <input maxLength={30} ref={input => this.input = input } placeholder="Add title"/>
                <p>Reminder</p>
                <p>Date: {reminderDate}</p>
                <button onClick={this.saveReminder(reminderDate)} className="reminder-save_btn" >save</button>  
            </>
        )
    }
};

export const mapStateToProps = state => ({
    reminders: state.appReducer.reminders,
    reminderId: state.appReducer.reminderId,
    selectedDay: state.appReducer.selectedDay,
});

export const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    fetchReminders: url => dispatch(fetchReminders(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddReminder);