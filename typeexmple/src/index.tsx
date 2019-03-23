import * as React from "react";
import * as ReactDOM from "react-dom";

interface HelloProps {
  name: string;
  age: number;
}
interface Question {
  q1: string;
  q2: string;
  q3: string;
  q4: string;
  q5: string;
  q6: string;
  q7: string;
  q8: string;
}

const quesion = {
  1: "お酒は好きな方だ",
  2: "料理を週に3回はする",
  3: "休日はわりと家で過ごしたい",
  4: "ランニングをすることは考えられない",
  5: "デートは毎回男性が奢るべき",
  6: "キャンプが好きだ",
  7: "どちらかというと和食が好き",
  8: "結婚式は友達を呼んで挙げたい",
  9: "時間にはきっちりしている方だ",
  10: "スカート派よりパンツ派だ"
};
const Hello: React.FC<HelloProps> = ({ name, age }) => (
  <h1>
    Hello {name} {age}!
  </h1>
);

// const evalMatch = state => {
//   console.log(state);
// };

const App: React.FC = () => {
  const [state, setCount] = React.useState({
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null
  });
  const [questionNum, setQuesionNumber] = React.useState(1);
  const [resultState, sendState] = React.useState({
    result: null,
    loading: false
  });
  console.log(state);
  let re;
  if (resultState.loading) {
    console.log(resultState.result);
    const aa = Object.entries(resultState.result).map((e, i) => {
      return e[1] === true;
    });
    re = aa.filter(e => {
      return e === true;
    });
  }
  return (
    <React.Fragment>
      {resultState.loading ? (
        <div>
          あなたともりたさんの相性はなんと
          <span style={{ color: "red" }}>{re.length * 10}%</span>
        </div>
      ) : (
        <div>
          {questionNum === 11 ? (
            <React.Fragment>
              <div>終了しました</div>
              <button
                onClick={() => {
                  console.log(state);
                  sendState({ result: state, loading: true });
                }}
              >
                診断する
              </button>
            </React.Fragment>
          ) : (
            <div>
              <h3>質問{questionNum}</h3>
              <div>{quesion[questionNum]}</div>
              <button
                onClick={() => {
                  setCount(Object.assign({}, state, { [questionNum]: true }));
                  setQuesionNumber(questionNum + 1);
                }}
              >
                はい
              </button>
              <button
                onClick={() => {
                  setCount(Object.assign({}, state, { [questionNum]: false }));
                  setQuesionNumber(questionNum + 1);
                }}
              >
                いいえ
              </button>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
