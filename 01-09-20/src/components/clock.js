import React, { Component } from "react";

export default class Clock extends Component {
  constructor(props) {
    super();
    this.state = {
      currentTime: String(new Date().toLocaleTimeString())
    };
  }

  componentDidMount() {
    this.liveTime = setInterval(() => {
      this.setState({ currentTime: String(new Date().toLocaleTimeString()) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.liveTime);
  }

  render() {
    return (
      <div>
        <h1>{this.state.currentTime}</h1>
      </div>
    );
  }
}
