import React, { Component } from "react";
import axios from "axios";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      books: {},
    };
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:5000/book/get")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div className="app">
        <h1>DevCamp React Starter</h1>
        <h2>React + React Router</h2>
      </div>
    );
  }
}
