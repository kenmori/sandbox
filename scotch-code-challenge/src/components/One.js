import React, { Component, useState } from "react";

const One = props => {
  const [count, increase] = useState(0);
  return (
    <div style={{ marginBottom: "50px" }}>
      <h2>Challenge 1</h2>
      <p>Count is: {count}</p>
      <button onClick={() => increase(count + 1)}>Increase Count!</button>
    </div>
  );
};

export default One;
