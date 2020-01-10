import React, { Component } from "react";

export default class WordSize extends Component {
  constructor(props) {
    super();
    this.state = {
      size: 60
    };
  }

  countUp = () => {
    this.setState({
      currentCount: (this.state.size += 5)
    });
  };

  countDown = () => {
    this.setState({
      currentCount: (this.state.size -= 5)
    });
  };

  render() {
    return (
      <div>
        <div style={{ height: "30vh" }}>
          <div
            style={{
              fontSize: `${this.state.size}px`
            }}
          >{`${this.state.size}px`}</div>
        </div>
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
