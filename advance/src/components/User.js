import React from "react";
import { compose, setDisplayName } from "recompose";

export default compose(setDisplayName("User"))(props => (
  <div>{props.text}</div>
));
