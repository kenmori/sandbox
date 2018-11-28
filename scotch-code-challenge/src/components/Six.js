import React, { Component, useState } from "react";

function Six() {
  const [name, setName] = useState("");
  function alertName() {
    alert(name);
  }
  function handleNameInput(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <h3> This is a Class Component </h3>
      <input
        type="text"
        onChange={handleNameInput}
        value={name}
        placeholder="Your name"
      />
      <button onClick={alertName}> Alert </button>
    </div>
  );
}

export default Six;
