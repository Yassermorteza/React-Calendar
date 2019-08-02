import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchReminders } from '../../actions/app';

import { REMINDERS_URL } from '../../utils/constants';

class Reminder extends Component {

    onDeleteReminder = event => {
        event.stopPropagation();

        const { reminderId, fetchReminders } = this.props;

        const options = {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json'
            },
        };

        fetch(`${REMINDERS_URL}${reminderId}`, options)
            .then(res => res.json())
            .then(data => {
                fetchReminders(REMINDERS_URL);
            })
            .catch(err => console.log(err));
    }

    render() {
        const { title } = this.props;
        return (
            <>
                <div className="reminder">
                    <span>{title}</span>
                    <span className="delete-reminder_btn" onClick={this.onDeleteReminder}>&times;</span>
                </div>

            </>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    fetchReminders: url => dispatch(fetchReminders(url))
});

export default connect(null, mapDispatchToProps)(Reminder);