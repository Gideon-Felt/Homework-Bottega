import React, { Component } from "react";

export default class WordToggle extends Component {
  constructor(props) {
    super();
    this.state = {
      greeting: "Hello",
      farewell: "Take Care",
      display: "Hello"
    };
  }

  toggleMethod = () => {
    if (this.state.display === this.state.greeting) {
      this.setState({
        display: this.state.farewell
      });
    } else if (this.state.display === this.state.farewell) {
      this.setState({
        display: this.state.greeting
      });
    }
  };

  render() {
    return (
      <div>
        <h1>{this.state.display}</h1>
        <button className="btn" onClick={this.toggleMethod}>
          Toggle Me
        </button>
      </div>
    );
  }
}
