import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      date: "",
      note: ""
    };
  }

  handleDateChange(date) {
    this.setState({})
  }

  handleNoteChange(note) {
    this.setState({note})
  }

  submitReminder(event) {
    event.preventDefault(event)
    const reminder = {date: this.state.date, note: this.state.note, id: Date.now()}
    this.props.addReminder(reminder)
  }


  render() {
    return (
      <form>
        <input placeholder="Date" onChange={(event) => this.handleDateChange(event.target.value)}></input>
        <input placeholder="Reminder" onChange={(event) => this.handleNoteChange(event.target.value)}></input>
        <button onClick={(event) => this.submitReminder(event)} >Add</button>
      </form>

    )
  }
}

export default Form;
