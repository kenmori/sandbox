import * as React from "react";
import * as ReactDOM from "react-dom";

interface HelloProps {
  name: string;
  age: number;
}

interface Son {
  name: string;
}

const Grandson: React.FC<Son> = props => <div>{props.name}</div>;

const Son: React.FC<Son> = props => <Grandson name={props.name} />;

const Hello: React.FC<HelloProps> = ({ name, age }) => (
  <h1>
    Hello {name} {age}!
  </h1>
);

const App: React.FC = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <Son name="森田" />
      <Hello name="react" age={20} />
      <h3>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>Count</button>
      </h3>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
