import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose, setDisplayName } from "recompose";
import TopComponent from "../component/Top";
import * as top from "../modules/top";

const Top = props =>
  console.log(props, "container") || (
    <div>
      <TopComponent {...props} />
    </div>
  );
let mapStateToProps = (state, props) => {
  console.log(state.top, "statefaf");
  return {
    count: state.top.count
  };
};

let mapStateToDispatch = (dispatch, props) => {
  return {
    up() {
      dispatch(top.upCount());
    },
    down() {
      dispatch(top.downCount());
    }
  };
};

export default compose(
  setDisplayName("Top"),
  withRouter,
  connect(
    mapStateToProps,
    mapStateToDispatch
  )
)(Top);
