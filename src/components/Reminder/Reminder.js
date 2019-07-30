import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeModal, fetchReminders } from '../../actions/app';


const url = "http://localhost:3000/reminders/";


class Reminder extends Component {

    saveReminder = date => () => {

        const { closeModal, fetchReminders } = this.props;

        const text = this.textArea.value;

        const reminder = { date, text};

        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(reminder)
        })
            .then(res => res.json())
            .then(data => {
                fetchReminders(url);
                closeModal();
            })
            .catch(err => console.log(err))
    }

    render() {
        const { selectedDay, closeModal } = this.props;
        const date = new Date();
        const month = date.getMonth();
        const year = date.getFullYear();
        const reminderDate = `${selectedDay}/${month}/${year}`;
        
        return(
            <>
                <p>Reminder</p>
                <p>Date: {reminderDate}</p>
                <textarea maxLength={30} ref={textArea => this.textArea = textArea }></textarea>
                <button onClick={closeModal} className="modal-cancel_btn" >Cancel</button>
                <button onClick={this.saveReminder(reminderDate)} className="reminder-save_btn" >save</button>  
            </>
        )
    }
};

export const mapStateToProps = state => ({
    selectedDay: state.appReducer.selectedDay,
});

export const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal()),
    fetchReminders: url => dispatch(fetchReminders(url))
});

export default connect(mapStateToProps, mapDispatchToProps)(Reminder);