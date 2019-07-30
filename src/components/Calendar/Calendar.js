import React, { Component } from 'react';
import Spinner from "react-spinkit";

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

    setCalendar = () => {
        const { today, numberofDays, firstDay } = this.props;
        const tdElements = [];

        for(let i = 1; i <= 31; i++) {
            tdElements.push(<td key={i}><div><p>{i}</p></div></td>); 
        }

        const orderedTdElements = [];
        let counter = 0;

        for(let i = 0; i <= 6; i++) {
            orderedTdElements.push([])
            for(let j = 0; j <= 6; j++) {
                if (i === 0 && j >= 2) {
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

export default Calendar;
