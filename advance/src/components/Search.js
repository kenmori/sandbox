import React from "react";
import { LogoutButton } from "../common/Button";
import { compose, setDisplayName } from "recompose";

export default compose(setDisplayName("Search"))(props => (
  <LogoutButton {...props} />
));
