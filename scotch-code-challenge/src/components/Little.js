import React, { Component } from "react";

class Little extends Component {
  componentWillUnmount() {
    alert("Goodbye!!");
  }

  render() {
    return (
      <div style={{ marginBottom: "50px", border: "1px solid black" }}>
        <h5> Hi I'm Little and its nice to meet you!!!</h5>
      </div>
    );
  }
}

export default Little;
