import React from "react";
import Reminder from "../Reminder/Reminder.js";
import "./ToDos.css";

const ToDos = ({ reminders }) => {
  const reminderCards = reminders.map((reminder) => {
    return <Reminder date={reminder.date} note={reminder.note} key={reminder.id} />;
  });

  return <section className="reminder-container">{reminderCards}</section>;
};

export default ToDos;
