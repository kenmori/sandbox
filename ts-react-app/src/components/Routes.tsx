import React, { FunctionComponent } from "react";
import { Switch, Route as OriginalRoute, RouteProps } from "react-router-dom";

import Header from "./Header";
import NoMatch from "./NoMatch";
import Top from "../containers/Top";


class Route extends React.Component<RouteProps> {
  public static defaultProps: Pick<RouteProps, "exact" | "strict" | "sensitive"> = {
    exact: true,
    strict: true,
    sensitive: true,
  };

  public render() {
    return (
      <OriginalRoute {...this.props} />
    );
  }
}

const Routes: FunctionComponent = () => (
  <div>
    <div>
      <Header />
    </div>
    <Switch>
      <Route path="/top" component={Top} />
      <Route path="*" component={NoMatch} />
    </Switch>
  </div>
);

export default Routes;
