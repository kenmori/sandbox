import React, { useState } from "react";
import ReactDOM from "react-dom";
import One from "./components/One";
import Two from "./components/Two";
import Three from "./components/Three";
import Four from "./components/Four";
import Five from "./components/Five";
import Six from "./components/Six";
import { ExamplePure, ExamplePureWithMemo } from "./components/ExamplePure";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Welcome to the Scotch Code Challenge!</h1>
      <div className="container">
        <One />
        <Six />
        <Two />
        <Three />
        <Four />
        <ExamplePure />
        <ExamplePureWithMemo />
        <Five />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
