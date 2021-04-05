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

  render() {
    return (
      <form>
        <input placeholder="Date" onChange={(event) => this.handleDateChange(event.target.value)}></input>
        <input placeholder="Reminder" onChange={(event) => this.handleNoteChange(event.target.value)}></input>
        <button>Add</button>
      </form>

    )
  }
}

export default Form;
