import React from "react";
import Reminder from "../Reminder/Reminder.js";
import "./ToDo.css";

const ToDo = ({ reminders }) => {
  const reminderCards = reminders.map((reminder) => {
    return <Reminder date={reminder.date} note={reminder.note} />;
  });

  return <section className="reminder-container">{reminderCards}</section>;
};

export default ToDo;
