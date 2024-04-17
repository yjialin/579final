import React, { useState } from "react";
import "./App.css";
import Booking from "./Booking";
import Calendar from "./Calendar";
import Motivation from "./Motivation";
import { useClassContext } from './ClassContext';

const Bookclass = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const { addClass } = useClassContext();
  
    const handleDateSelect = (date) => {
      setSelectedDate(date);
    };
  
    const handleBookingSuccess = (date, content) => {
      addClass(selectedDate, date, content);
      alert("Booked successful!");
    };
  
    return (
      <div className="app-container">
        <div className="calendar-container">
          <Calendar onDateSelect={handleDateSelect} />
        </div>
        <div className="booking-container">
          {selectedDate && <Booking date={selectedDate} onBookingSuccess={handleBookingSuccess} />}
        </div>
      </div>
    );
  };
  
  export default Bookclass;
  