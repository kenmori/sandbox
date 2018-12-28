import React from "react";

export default props =>
  console.log(props) || (
    <div>
      Top
      <div>countは {props.count}</div>
      <button onClick={() => props.up()}>up</button>
      <button onClick={() => props.down()}>down</button>
    </div>
  );
