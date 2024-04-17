import React, { useState } from "react";
import "./App.css";
import Booking from "./Booking";
import Calendar from "./Calendar";
import Motivation from "./Motivation";

/*function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="App">
      <h1>Fitness Todo List</h1>
      <Motivation />
      <Calendar onDateSelect={setSelectedDate} />
      {selectedDate && <Booking date={selectedDate} />}
    </div>
  );
}*/

// const App = () => {
//   const [selectedDate, setSelectedDate] = useState(null);

//   const handleDateSelect = (date) => {
//     setSelectedDate(date);
//   };

//   const handleBookingSuccess = () => {
//     alert("Booked successful!");
//   };

//   return (
//     <div className="app-container">
//       <div className="calendar-container">
//         <Calendar onDateSelect={handleDateSelect} />
//       </div>
//       <Motivation />
//       <div className="booking-container">
//         {selectedDate && <Booking date={selectedDate} onBookingSuccess={handleBookingSuccess} />}
//       </div>
//     </div>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Bookclass from './Bookclass';
import Todolist from './Todolist';
import MySwitch from './MySwitch';
import { ClassProvider } from './ClassContext';

const App = () => {
  return (
    // <Router>
    //   <div>
    //     <Link to="/Bookclass">Go to Bookclass</Link>
    //     <Link to="/Todolist">Go to Todolist</Link>
    //   </div>
    //   <Routes>
    //     <Route path="/Bookclass" element={<Bookclass />} />
    //     <Route path="/Todolist" element={<Todolist />} />
    //   </Routes>
    // </Router>
    <Router>
      <ClassProvider>
        <div className="app-container">
          <nav>
            <ul>
              <li><Link to="/Bookclass">Bookclass</Link></li>
              <li><Link to="/Todolist">Todolist</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/Bookclass" element={<Bookclass />} />
            <Route path="/Todolist" element={<Todolist />} />
          </Routes>
        </div>
      </ClassProvider>
    </Router>
  );
};

export default App;
