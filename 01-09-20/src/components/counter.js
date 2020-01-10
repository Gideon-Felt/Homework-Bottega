import React, { Component } from "react";

export default class Counter extends Component {
  constructor(props) {
    super();
    this.state = {
      currentCount: 0
    };
  }

  countUp = () => {
    this.setState({
      currentCount: (this.state.currentCount += 1)
    });
  };

  countDown = () => {
    this.setState({
      currentCount: (this.state.currentCount -= 1)
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.currentCount}</h1>
        <button className="btn multi" onClick={this.countUp}>
          Add
        </button>
        <button className="btn multi" onClick={this.countDown}>
          Sub
        </button>
      </div>
    );
  }
}
