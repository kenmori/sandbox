import React, { PureComponent, Component } from "react";

function Unstable(props) {
  // monitor how many times this component is rendered
  console.log(" Rendered this component ");
  return (
    <div>
      <p> {props.value}</p>
    </div>
  );
}

// pureComponentはstateかpropsが変わった時だけ再レンダリングを可能にする
class ExamplePure extends PureComponent {
  state = {
    value: 1
  };
  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { value: 1 }; //呼ばれない
        // return { value: Math.random() }; 呼ばれる
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        <Unstable value={this.state.value} />
      </div>
    );
  }
}

const UnstableMemo = React.memo(function Unstable(props) {
  console.log("rendered Unstable component");
  return <div>{props.val}</div>;
});

class ExamplePureWithMemo extends Component {
  state = {
    value: 1
  };
  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { value: 1 };
      });
    }, 2000);
  }
  render() {
    return (
      <div>
        <UnstableMemo value={this.state.value} />
      </div>
    );
  }
}

export { ExamplePure, ExamplePureWithMemo };
