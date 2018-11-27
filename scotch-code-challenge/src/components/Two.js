import React, { Component } from "react";

class Two extends Component {
  state = {
    activeUser: "Chris"
  };
  changeUser = () => {
    this.setState({ activeUser: "Bolingo!" });
  };

  render() {
    return (
      <div style={{ marginBottom: "50px" }}>
        <h2>Challenge 2</h2>
        <p>Active User is: {this.state.activeUser}</p>
        <button onClick={this.changeUser}>Change Me!</button>
      </div>
    );
  }
}

export default Two;
