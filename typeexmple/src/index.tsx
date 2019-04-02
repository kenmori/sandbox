import React, { useState } from "react";
import * as ReactDOM from "react-dom";

interface HelloProps {
  name: string;
}

const Hello: React.FC<HelloProps> = ({ name }) => <h1>Hello {name}!</h1>;

const App: React.FC = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Hello name="react" />
      <h3>
        Count: {count}
        <button onClick={() => setCount(count + 1)}>Count</button>
      </h3>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
