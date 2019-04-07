import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
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
  { お酒は好きでよく飲む: true },
  { 料理を週に3回はする: false },
  { 休日はわりと家で過ごしたい: true },
  { ランニングをすることは考えられない: false },
  { 付き合ってからも毎回奢ってほしい: false },
  { キャンプが好きだ: false },
  { 朝は弱い: false },
  { どちらかというと和食が好き: true },
  { 結婚式は親しい人とこじんまりやりたい: true },
  { 待ち合わせ場所にはだいたい先に着いている: true },
  { スカート派よりストレートパンツ派だ: true },
  { いままでサプライズをしたことがある: true },
  { ラーメンが好き: true },
  { いざとなれば腕一本で食べていける技術がある: true },
  { 雰囲気のあるお店が好き: false }
];

const lank = [
  {
    score: 0,
    label: "なかなか難しい結果",
    header: "人生山あり山あり",
    text:
      "やっていること、考えていること、これからのこと全部合わない笑。でも大丈夫。",
    image: "help",
    resolve: "でも安心してください"
  },
  {
    score: 9,
    label: "困難困難",
    header: "全然わかっていないね",
    text: "本当に難しいです大変です",
    image: "help2",
    resolve: "でも安心してください"
  },
  {
    score: 19,
    label: "無理無理",
    header: "難しい状態です",
    text: "まあなかなか難しい感じだね。",
    image: "help3",
    resolve: "でも安心してください"
  },
  {
    score: 29,
    label: "もはや他人",
    header: "あまり知らない",
    text: "でも徐々にだね",
    image: "help4",
    resolve: "でも安心してください"
  },
  {
    score: 39,
    label: "ん？あれ大丈夫？",
    header: "今。今理解しよう",
    text:
      "今後に期待だね。ちょっとどちらかが合わせればうまくいくんじゃないかな",
    image: "help5",
    resolve: "でも安心してください"
  },
  {
    score: 49,
    label: "まあまあな関係",
    header: "会うところもあるし合わないところもあるね",
    text: "もうすこしだけコミニュケーションすればいい感じになりそう",
    image: "normal",
    resolve: "でも安心してください"
  },
  {
    score: 59,
    label: "良き理解者",
    header: "理解していてグッとです",
    text: "結構息が合っている気がするね",
    image: "good1",
    resolve: "でも安心してください"
  },
  {
    score: 69,
    label: "親友級",
    header: "徐々に",
    text: "いつも一緒にいて楽しいはずだね。だって結構あっているから。",
    image: "good2",
    resolve: "でも安心してください"
  },
  {
    score: 79,
    label: "家族級",
    header: "こたつ一緒レベル",
    text: "家族や家族、ずーっと家族やで",
    image: "good3",
    resolve: "でも安心してください"
  },
  {
    score: 89,
    label: "双子級",
    header: "一緒に布団で寝たときあるはず",
    text: "もうお互いのこと知りすぎている。これはもう何か別次元の関係",
    image: "good4",
    resolve: "でも安心してください"
  },
  {
    score: 99,
    label: "クローン級",
    header: "合いすぎて逆に怖い。",
    text: "すごく大変なくらい相性がいいです。どうしましょう",
    image: "good5",
    resolve: "でも安心してください"
  },
  {
    score: 100,
    label: "ありえへん世界",
    header: "怖いもう",
    text:
      "絶対でない数字でたやん。逆にあなた一緒の人でしょもう。ないない。もう一回他人とやって",
    image: "good6",
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
      <h2>もりたさんとの相性診断</h2>
      <img src="/src/image/main.png" alt="" />
      <div>森田が設定した質問に答えて自分との相性がわかります</div>
    </div>
  );
}

const Again = () => <a href="/">もう一度診断し直す</a>;
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
          <Again />
          <img src="/src/image/result.png" alt="" />
          <div>
            <Link to="/result/" resultState={{ result: state }}>
              <Button variant="contained" color="primary">
                診断結果をみる
              </Button>
            </Link>
          </div>
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
      <Link to="/setting/question/create/" component={QuestionCreate}>
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

const InputFeedback = ({ error }) =>
  error ? <div className={classNames("input-feedback")}>{error}</div> : null;

// Radio group
const RadioButtonGroup = ({
  value,
  error,
  touched,
  id,
  label,
  className,
  children
}) => {
  const classes = classNames(
    "input-field",
    {
      "is-success": value || (!error && touched), // handle prefilled or user-filled
      "is-error": !!error && touched
    },
    className
  );

  return (
    <div className={classes}>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </div>
  );
};

const Basic = () => (
  <div>
    <div>
      <Formik
        initialValues={{
          friends: [
            "第一印象はよかった",
            "次も会いたいと思う",
            "友達以上恋人未満だもう少し"
          ]
        }}
        onSubmit={values =>
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500)
        }
        render={({ values }) => (
          <Form>
            <FieldArray
              name="friends"
              render={arrayHelpers => (
                <div>
                  {values.friends && values.friends.length > 0 ? (
                    values.friends.map((quesions, index) => (
                      <div key={index}>
                        <Field name={`friends.${index}`} />
                        <Field name={`friends.${index}.result`} type="radio" />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          -
                        </button>
                        <button
                          type="button"
                          onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                        >
                          +
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type="button" onClick={() => arrayHelpers.push("")}>
                      {/* show this when user has removed all friends from the list */}
                      Add a friend
                    </button>
                  )}
                  <div>
                    <button type="submit">Submit</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  </div>
);

const QuestionCreate = () => {
  return (
    <div>
      <h2>質問を作成する</h2>
      <Basic />
    </div>
  );
};

const Table = ({ resultText, score, questionKey, resultState, initObject }) => {
  return (
    <div>
      あなたともりたさんの相性は
      <div style={{ color: "red", fontSize: "70px", fontWeight: "bold" }}>
        {score}%
      </div>
      <img src={`/src/image/${resultText.image}.png`} />
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
      <h2>相性診断結果</h2>
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
      <Again />
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
        <Route path="/" exact component={Index} />
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">ホーム</Link>
              </li>
              <li>
                <Link to="/setting/">設定(工事中)</Link>
              </li>
              <li>
                <Link to="/start/">診断スタート</Link>
              </li>
              <li>
                <Link to="/history/">履歴(工事中)</Link>
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
      <hr />
      {/* <div>今後の機能</div>
      <ul>
        <li> 自分の質問を設定できるようにする </li>
        <li> リンクを貼れば相手が自分の質問に対して診断できる</li>
        <li> 過去に診断した履歴を閲覧できる </li>
      </ul> */}
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
