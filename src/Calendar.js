/*import React from "react";

function Calendar({ onDateSelect }) {
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="calendar">
      {days.map((day) => (
        <button key={day} onClick={() => onDateSelect(day)}>
          {day}
        </button>
      ))}
    </div>
  );
}

export default Calendar;

import React, { useState } from 'react';

 function Calendar({ onDateSelect }) {
  const [date, setDate] = useState(new Date());

  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const prevMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{months[date.getMonth()]} {date.getFullYear()}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="days-of-week">
          {daysOfWeek.map(day => (
            
            <div key={day} className="day-of-week">{day}</div>
          ))}
        </div>
        <div className="dates">
          {[...Array(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()).keys()].map(day => (
            <div key={day} className="date">{day + 1}</div>
          ))}
          
        </div>
      </div>
    </div>
  );
};

export default Calendar;*/
// Calendar.js
import React, { useState } from 'react';

function Calendar({ onDateSelect }) {
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null); // 用于存储当前选择的日期

  const months = [
    "January", "February", "March", "April", "May", "June", "July", "August",
    "September", "October", "November", "December"
  ];

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const prevMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day) => {
    setSelectedDate(day + 1); // 添加样式类的日期
    onDateSelect(`${months[date.getMonth()]} ${day + 1}, ${date.getFullYear()}`); // 将日期传递给父组件
  };

  return (
    <div className="calendar">
      <div className="header">
        <button onClick={prevMonth}>&lt;</button>
        <h2>{months[date.getMonth()]} {date.getFullYear()}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <div className="days">
        <div className="days-of-week">
          {daysOfWeek.map(day => (
            <div key={day} className="day-of-week">{day}</div>
          ))}
        </div>
        <div className="dates">
          {[...Array(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()).keys()].map(day => (
            <div key={day} className={`date ${selectedDate === day + 1 ? 'selected' : ''}`} onClick={() => handleDateClick(day)}>
              {day + 1}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
