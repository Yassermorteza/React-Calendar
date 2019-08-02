import React from 'react';

import Reminder from '../Reminder';

const Day  = ({
    day,
    title,
    counter,
    reminderId,
    reminderDay,
    onSelectDay,
}) => (
    <td key={`${counter}_${title}`} onClick={onSelectDay(counter, reminderId)} >
        <div>
            <p className={day === counter ? "today-style" : "day-style"} >{counter}</p>
            {reminderDay === counter && <Reminder title={title} reminderId={reminderId} />}
        </div>
    </td>
);

export default Day;