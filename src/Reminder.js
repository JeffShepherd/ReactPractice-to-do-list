import React from "react";
import "./Reminder.css";

const Reminder = ({ date, note }) => {
  return (
    <article className="reminder">
      <p>{date}</p>
      <p>{note}</p>
    </article>
  );
};

export default Reminder;
