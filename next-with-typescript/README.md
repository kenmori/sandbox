
Udemy Recture

https://www.udemy.com/react-with-typescript/learn/lecture/14461118#overview

### - npm init
### - npm i -D next react react-dom

### install type
`yarn add -D @types/next @types/react @zeit/next-typescript typescript`

### create config
- NextでTypeScriptを使えるようにする為

next.config.js

### tsconfig.json

ここから拝借
- https://github.com/zeit/next.js/blob/canary/examples/with-typescript/tsconfig.json

### .bablerc を追加
- nextの設定をbabelに伝える

### pages/index.tsxの追加
- nextがルーティングする

### .nextの追加
Nextはいつでもビルドを終えれるように、buildファイルを.nextに保存する。
これはコミットしない

### gitignore


