import React, { Component } from "react";

class Four extends Component {
  state = {
    message: "What's happening this week?"
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ message: "I only know it's gon be lit!!" });
    }, 5000);
  }

  render() {
    return (
      <div style={{ marginBottom: "50px" }}>
        <h2>Challenge 4</h2>
        <p>Status: {this.state.message}</p>
      </div>
    );
  }
}

export default Four;
