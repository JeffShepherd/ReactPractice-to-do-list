import React, { Component } from "react";
import testApiData from "./testData.js";
import ToDo from "./ToDo.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      reminders: testApiData.reminders,
    };
  }

  // componentDidMount() {
  //   this.setState({reminders: [...this.state.reminders, ...]});
  // }

  render() {
    return (
      <main>
        <h1>To-Dos</h1>
        <ToDo reminders={this.state.reminders} />
      </main>
    );
  }
}

export default App;
