import React from "react";
import { compose, setDisplayName } from "recompose";

export default compose(setDisplayName("Topic"))(props => (
  <div>{props.text}</div>
));
