import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import { useEffect } from "react";

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

const App: React.FC = () => {
  const [state, setCount] = React.useState(obj);
  const [questionNum, setQuesionNumber] = React.useState(0);
  const questionKey = quesion.map((e, i) => Object.keys(e)[0]);
  const questionLength = questionKey.length;
  const questionValues = quesion.map((e, i) => Object.values(e)[0]);
  const [resultState, sendState] = React.useState({
    result: null,
    loading: false
  });

  let re;
  let obj = {};
  let score;
  let resultText;
  if (resultState.loading) {
    quesion.forEach((e, i) => {
      obj[i] = Object.values(e)[0];
    });

    const aa = Object.entries(resultState.result).map((e, i) => {
      return e[1] === questionValues[i];
    });
    re = aa.filter(e => {
      return e === true;
    });
    console.log(re, "結果");
    score = Math.round((re.length / questionLength) * 100);
    resultText = lank.filter((e, i) => {
      console.log(e, score, "eeeee");
      return score < e.score;
    })[0];
  }
  return (
    <React.Fragment>
      {resultState.loading ? (
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
              {Object.entries(resultState.result).map((e, i) => {
                return (
                  <div key={i} style={{ fontSize: 12 }}>
                    {e[1] ? <div>○</div> : <div>×</div>}
                  </div>
                );
              })}
            </div>
            <div>
              <div>もりた</div>
              {Object.entries(obj).map((e, i) => {
                return (
                  <div key={i} style={{ fontSize: 12 }}>
                    {e[1] ? <div>○</div> : <div>×</div>}
                  </div>
                );
              })}
            </div>
          </div>
          <br />
          <br />
          <div style={{ fontSize: 12 }}>
            キャプチャを撮って後々のために残しておこう!!
          </div>
          <br />
          <br />
          <Button variant="outlined">
            今度は自分が質問を設定してチェックしてもらう
          </Button>
        </div>
      ) : (
        <div>
          {questionNum === questionLength ? (
            <React.Fragment>
              <div>終了しました</div>
              <Button
                onClick={() => {
                  console.log(state);
                  sendState({ result: state, loading: true });
                }}
                color="primary"
              >
                診断する
              </Button>
            </React.Fragment>
          ) : (
            <div>
              <h3>質問{questionNum + 1}</h3>
              <div>
                {questionNum + 1} / {questionLength}
              </div>
              <div>{questionKey[questionNum]}</div>
              <div style={{ marignTop: 10 }} />
              <Button
                variant="outlined"
                onClick={() => {
                  setCount(Object.assign({}, state, { [questionNum]: true }));
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
                  setQuesionNumber(questionNum + 1);
                }}
              >
                いいえ
              </Button>
            </div>
          )}
        </div>
      )}
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
