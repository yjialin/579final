/*import React, { useState } from "react";

function Booking({ date }) {
  const [isBooked, setIsBooked] = useState(false);

  function handleBooking() {
    // 在这里，你应该发送请求到后端服务进行预订，然后更新状态
    setIsBooked(true);
    // 模拟后端请求
    alert("Booked successful！");
  }

  return (
    <div className="booking">
      <h2>Booking Class</h2>
      <p>Date：{date}</p>
      {isBooked ? (
        <p>Booked successful！</p>
      ) : (
        <button onClick={handleBooking}>Book now</button>
      )}
    </div>
  );
}

export default Booking;*/
// Booking.js
import React, { useState } from 'react';

function Booking({ date, onBookingSuccess }) {
  const [isBooked, setIsBooked] = useState(false);

  function handleBooking() {
    // 在这里，你应该发送请求到后端服务进行预订，然后更新状态
    setIsBooked(true);
    // 模拟后端请求
    setTimeout(() => {
      onBookingSuccess();
    }, 1000); // 假设请求需要一秒钟的时间
  }

  return (
    <div className="booking">
      <h2>Booking Class</h2>
      <p>Date: {date}</p>
      {isBooked ? (
        <p>Booked successful!</p>
      ) : (
        <button onClick={handleBooking}>Book now</button>
      )}
    </div>
  );
}

export default Booking;

