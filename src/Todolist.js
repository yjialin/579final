import React, { useState } from "react";
import "./App.css";
import Booking from "./Booking";
import Calendar from "./Calendar";
import Motivation from "./Motivation";
import { useClassContext } from './ClassContext';

const Todolist = () => {
    const { classes, deleteClass } = useClassContext();

  return (
    <div className="todolist-container">
      <h1>Upcoming Classes</h1>
      <ul>
        {classes.map((cls, index) => (
          <li key={index}>
            <span>{cls.date} - {cls.content}</span>
            <button className="btn-done" onClick={() => deleteClass(index)}>Done</button>
          </li>
        ))}
      </ul>
      <Motivation />
    </div>
  );
};


  export default Todolist;
  