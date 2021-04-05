import React, { Component } from "react";
import testApiData from "../testData.js";
import ToDos from "../ToDos/ToDos.js";
import Form from "../Form/Form.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      reminders: '',
    };
  }

  componentDidMount() {
    this.setState({reminders: testApiData.reminders});
  }

  render() {
    return (
      <main>
        <h1>To-Dos</h1>
        {this.state.reminders && <ToDos reminders={this.state.reminders} />}
        <Form />
      </main>
    );
  }
}

export default App;
