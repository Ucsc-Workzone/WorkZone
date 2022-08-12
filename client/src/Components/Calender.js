import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './styles/calender.css';
const Calender = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className="maincalender-con">
            <Calendar onChange={onChange} value={value} className="maincalender-con" />
        </div>
    );
};

export default Calender;
