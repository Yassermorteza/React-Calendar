import React from 'react';

import '../../styles/header.scss';

const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];

const Header = ({
    // month,
    // year,
}) => {
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    return (
    <div className="header" >
        <div><span>{`< ${months[month]} >`}</span></div>
        <div><span>{`< ${year} >`}</span></div>
    </div>
)};

export default Header;