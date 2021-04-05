import React, { Component } from "react";
import testApiData from "../testData.js";
import ToDos from "../ToDos/ToDos.js";
import Form from "../Form/Form.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      reminders: [],
    };
  }

  componentDidMount() {
    this.setState({reminders: testApiData.reminders});
  }

  addReminder(reminder) {
    // console.log([this.state.reminders, reminder])
    testApiData.reminders.push(reminder)
    this.setState({ reminders: testApiData.reminders });
  }

  render() {
    return (
      <main>
        <h1>To-Dos</h1>
        {this.state.reminders.length && <ToDos reminders={this.state.reminders} />}
        <Form addReminder= {this.addReminder}/>
      </main>
    );
  }
}

export default App;
