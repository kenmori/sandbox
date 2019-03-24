import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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

const quesion = [
  { お酒は好きな方だ: true },
  { 料理を週に3回はする: false },
  { 休日はわりと家で過ごしたい: true },
  { ランニングをすることは考えられない: true },
  { デートは毎回男性が奢るべき: true },
  { キャンプが好きだ: false },
  { どちらかというと和食が好き: true },
  { 結婚式は友達を呼んで挙げたい: true },
  { 時間にはきっちりしている方だ: true },
  { スカート派よりパンツ派だ: true },
  { 記念日は祝いたい: true }
];

const lank = [
  {
    score: 0,
    label: "終わり",
    header: "解散解散",
    text: "合わないマジで合わないわ",
    image: "taihen",
    resolve: "でも安心してください"
  },
  {
    score: 9,
    label: "困難困難",
    header: "全然わかっていないね",
    text: "本当に難しいです大変です",
    image: "taihen",
    resolve: "でも安心してください"
  },
  {
    score: 19,
    label: "無理無理",
    header: "難しい状態です",
    text: "まあなかなか難しい感じだね。",
    image: "taihen",
    resolve: "でも安心してください"
  },
  {
    score: 29,
    label: "もはや他人",
    header: "あまり知らない",
    text: "でも徐々にだね",
    image: "taihen",
    resolve: "でも安心してください"
  },
  {
    score: 39,
    label: "ん？あれ大丈夫？",
    header: "今。今理解しよう",
    text:
      "今後に期待だね。ちょっとどちらかが合わせればうまくいくんじゃないかな",
    image: "taihen",
    resolve: "でも安心してください"
  },
  {
    score: 49,
    label: "まあまあな関係",
    header: "会うところもあるし合わないところもあるね",
    text: "もうすこしだけコミニュケーションすればいい感じになりそう",
    image: "taihen",
    resolve: "でも安心してください"
  },
  {
    score: 59,
    label: "良き理解者",
    header: "理解していてグッとです",
    text: "結構息が合っている気がするね",
    image: "taihen",
    resolve: "でも安心してください"
  },
  {
    score: 69,
    label: "親友級",
    header: "徐々に",
    text: "いつも一緒にいて楽しいはずだね。だって結構あっているから",
    image: "taihen",
    resolve: "でも安心してください"
  },
  {
    score: 79,
    label: "家族級",
    header: "こたつ一緒レベル",
    text: "家族や家族、ずーっと家族やで",
    image: "taihen",
    resolve: "でも安心してください"
  },
  {
    score: 89,
    label: "双子級",
    header: "一緒に布団で寝たときあるはず",
    text: "もうお互いのこと知りすぎている。これはもう何か別次元の関係",
    image: "taihen",
    resolve: "でも安心してください"
  },
  {
    score: 99,
    label: "クローン級",
    header: "合いすぎて逆に怖い。",
    text: "すごく大変なくらい相性がいいです。どうしましょう",
    image: "taihen",
    resolve: "でも安心してください"
  },
  {
    score: 100,
    label: "ありえへん世界",
    header: "怖いもう",
    text:
      "絶対でない数字でたやん。逆にあなた一緒の人でしょもう。ないない。もう一回他人とやって",
    image: "taihen",
    resolve: "でも安心してください"
  }
];
//説明文

//今度は私の質問を設定して意中の人に送る
//LINEで送る

const Hello: React.FC<HelloProps> = ({ name, age }) => (
  <h1>
    Hello {name} {age}!
  </h1>
);

// const evalMatch = state => {
//   console.log(state);
// };

function Index() {
  return (
    <div>
      <h2>相性診断</h2>
      <p>
        相手に質問をして答えてもらい、どのくらい自分と相性がいいか確認するアプリです。
      </p>
    </div>
  );
}

const Start = ({
  questionNum,
  questionLength,
  questionKey,
  state,
  setCount,
  sendState,
  setQuesionNumber
}) => {
  return (
    <div>
      <h2>診断</h2>
      {questionNum === questionLength ? (
        <React.Fragment>
          <div>終了しました</div>
          <li>
            <Link to="/result/" resultState={{ result: state }}>
              結果
            </Link>
          </li>
        </React.Fragment>
      ) : (
        <div>
          <div>
            <h3>
              質問{questionNum + 1} / {questionLength}
            </h3>

            <div>{questionKey[questionNum]}</div>
            <div style={{ marignTop: 10 }} />
            <Button
              variant="outlined"
              onClick={() => {
                setCount(Object.assign({}, state, { [questionNum]: true }));
                sendState(Object.assign({}, state, { [questionNum]: true }));
                setQuesionNumber(questionNum + 1);
              }}
              color="primary"
              style={{ marginRight: 10 }}
            >
              はい
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => {
                setCount(Object.assign({}, state, { [questionNum]: false }));
                sendState(Object.assign({}, state, { [questionNum]: false }));
                setQuesionNumber(questionNum + 1);
              }}
            >
              いいえ
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

// id: 1
// me: "森田"
// resultText: {,…}
// initObject: {0: true, 1: false, 2: true, 3: true, 4: true, 5: false, 6: true, 7: true, 8: true, 9: true, 10: true}
// resultState: {0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true, 10: true}
// resultText: {score: 89, label: "双子級", header: "一緒に布団で寝たときあるはず", text: "もうお互いのこと知りすぎている。これはもう何か別次元の関係",…}
// score: 82
// target: "松下"
// time: "12月8日"
const HistoryItem = props => {
  console.log(props.match.params.id, "HIstory");
  let historyValue;
  //TODO 共通化
  if (localStorage.getItem("shindan")) {
    historyValue = JSON.parse(localStorage.getItem("shindan"));
  }
  const target = historyValue.filter((e, i) => {
    return e.id === parseInt(props.match.params.id, 10);
  });
  const t = target[0];
  return (
    <div>
      <h2>履歴詳細</h2>
      履歴詳細です
      <Table
        resultText={t.resultText}
        score={t.score}
        questionKey={t.questionKey}
        resultState={t.resultState}
        initObject={t.initObject}
      />
    </div>
  );
};
const History = () => {
  let historyValue;
  //TODO 共通化
  if (localStorage.getItem("shindan")) {
    historyValue = JSON.parse(localStorage.getItem("shindan"));
  }
  return (
    <div>
      <h2>履歴</h2>
      <p>
        端末に保存します。ご覧のブラウザで立ち上げた際に履歴がロードされます。ローカルストレージを消去すると履歴は削除されます
      </p>
      <ul>
        {historyValue ? (
          historyValue.map((e, i) => {
            return (
              <div key={i}>
                <Link
                  to={`/history/${e.id}/`}
                  render={() => <HistoryItem e={e} />}
                >
                  {e.id}: {e.me}と{e.target} {e.time}
                </Link>
              </div>
            );
          })
        ) : (
          <p>履歴はありません</p>
        )}
      </ul>
    </div>
  );
};
const Setting = props => {
  return (
    <div>
      <h2>設定</h2>
      <Link to="/setting/question/">質問一覧</Link> <br />
      <Link to="/setting/question/create/" render={}>
        質問を作成する
      </Link>
    </div>
  );
};

const Question = () => {
  <div>
    <br />
    相手に聞きたい質問と自分の答えを設定して、相性を測りましょう。
    <br />
    <br />
    彼の考え方がわかり、こちらの価値観を相手に伝えれるいい機会です。
    <br />
    <br />
    答え終わった後はキャプチャに撮ってお互いの「取扱説明書」になるといいですね。
  </div>;
};

const QuestionCreate = () => {
  return (
    <div>
      <h2>質問を作成する</h2>
    </div>
  );
};

const Table = ({ resultText, score, questionKey, resultState, initObject }) => {
  return (
    <div>
      あなたともりたさんの相性はなんと
      <div style={{ color: "red" }}>{score}%</div>
      <div>{resultText.header}</div>
      <div>{resultText.text}</div>
      <br />
      <br />
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <div>価値観の比較</div>
          {questionKey.map((e, i) => {
            return (
              <div key={i} style={{ fontSize: 12 }}>
                質問{i + 1} : {e}
              </div>
            );
          })}
        </div>
        <div>
          <div>あなた</div>
          {Object.entries(resultState).map((e, i) => {
            return (
              <div key={i} style={{ fontSize: 12 }}>
                {e[1] ? <div>○</div> : <div>×</div>}
              </div>
            );
          })}
        </div>
        <div>
          <div>もりた</div>
          {Object.entries(initObject).map((e, i) => {
            return (
              <div key={i} style={{ fontSize: 12 }}>
                {e[1] ? <div>○</div> : <div>×</div>}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const Result = props => {
  let re;
  let score;
  let resultText;
  const aa = Object.entries(props.resultState).map((e, i) => {
    return e[1] === props.questionValues[i];
  });
  re = aa.filter(e => {
    return e === true;
  });
  score = Math.round((re.length / props.questionLength) * 100);
  resultText = lank.filter((e, i) => {
    return score < e.score;
  })[0];
  function save({ resultText, score, resultState, initObject, questionKey }) {
    let historyValue;
    let arr = [];
    if (localStorage.getItem("shindan")) {
      historyValue = JSON.parse(localStorage.getItem("shindan"));
      arr = [...historyValue];
    }
    arr.push({
      id: 1,
      me: "森田",
      target: "松下",
      time: "12月8日",
      resultText,
      score,
      questionKey,
      resultState,
      initObject
    });
    localStorage.setItem("shindan", JSON.stringify(arr));
  }
  return (
    <div>
      <h2>Result</h2>
      <Table
        resultText={resultText}
        score={score}
        questionKey={props.questionKey}
        resultState={props.resultState}
        initObject={props.initObject}
      />
      <div style={{ fontSize: 12 }}>
        キャプチャを撮って後々のために残しておこう!!
      </div>
      <br />
      <br />
      <Button variant="outlined">
        <Link to="/setting/">
          今度は自分が質問を設定して誰かに答えてもらおう
        </Link>
      </Button>
      <Button
        variant="outlined"
        onClick={() => {
          save({
            resultText,
            score,
            questionKey: props.questionKey,
            resultState: props.resultState,
            initObject: props.initObject
          });
        }}
      >
        <Link to="/history/">結果を保存する</Link>
      </Button>
    </div>
  );
};

const App: React.FC = () => {
  let obj = {};
  quesion.forEach((e, i) => {
    obj[i] = Object.values(e)[0];
  });
  const [state, setCount] = React.useState(obj);
  const [questionNum, setQuesionNumber] = React.useState(0);
  const questionKey = quesion.map((e, i) => Object.keys(e)[0]);
  const questionLength = questionKey.length;
  const questionValues = quesion.map((e, i) => Object.values(e)[0]);
  const [resultState, sendState] = React.useState({
    result: null,
    loading: false
  });
  return (
    <React.Fragment>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">ホーム</Link>
              </li>
              <li>
                <Link to="/setting/">設定</Link>
              </li>
              <li>
                <Link to="/start/">診断スタート</Link>
              </li>
              <li>
                <Link to="/history/">履歴</Link>
              </li>
            </ul>
          </nav>
          <Route
            path="/start"
            render={() => (
              <Start
                questionNum={questionNum}
                questionLength={questionLength}
                questionKey={questionKey}
                state={state}
                sendState={sendState}
                setCount={setCount}
                setQuesionNumber={setQuesionNumber}
              />
            )}
          />
          <Route path="/" exact component={Index} />
          <Route path="/history/" exact render={() => <History />} />
          <Route
            path="/history/:id/"
            exact
            render={props => <HistoryItem {...props} />}
          />
          <Route path="/setting/" exact render={() => <Setting />} />
          <Route path="/setting/question/" exact render={() => <Questions />} />
          <Route
            path="/setting/question/create/"
            exact
            render={() => <QuestionCreate />}
          />
          <Route
            path="/result/"
            render={() => (
              <Result
                questionKey={questionKey}
                questionLength={questionLength}
                questionValues={questionValues}
                resultState={resultState}
                initObject={obj}
              />
            )}
          />
        </div>
      </Router>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
