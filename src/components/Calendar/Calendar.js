import React, { Component } from 'react';
import Spinner from "react-spinkit";

import '../../styles/calendar.scss';

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];


class Calendar extends Component {

    render() {

        return(
            <table>
                <thead>
                    <tr>
                      {weekDays.map(day => <th key={day}>{day}</th>)}  
                    </tr>
                </thead>
            </table>
        )
    }
};

export default Calendar;
