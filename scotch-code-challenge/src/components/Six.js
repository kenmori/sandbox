import React, { Component, useState, useEffect } from "react";

function Six() {
  const [name, setName] = useState("");
  const [header, setHeader] = useState("");
  useEffect(() => {
    const h3 = document.querySelectorAll("#header")[0];
    setTimeout(() => {
      h3.innerHTML = header;
    }, 5000);
  });
  function alertName() {
    alert(name);
  }
  function handleNameInput(e) {
    setName(e.target.value);
  }
  function handleSetInput(e) {
    setHeader(e.target.value);
  }
  return (
    <div>
      <h3 id="header"> This is a Class Component </h3>
      <input type="text" onChange={handleSetInput} value={header} />
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
