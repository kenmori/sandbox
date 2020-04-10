## Node.jsプログラミング

- download Heroku cli


### REPL(リプル)環境(Read-Eval-Print Loop; 対話的にコードを実行できる仕組み) 

Node.jsのREPL環境を介してNode.jsを使う
Node.jsの対話的シェルがNode版のREPL
このシェルの中でJavaScriptを書くと、そのコードはリアルタイムにそのターミナルの中で評価される


`node`
を実行してREPL環境に入った後
.load hogehoge.jsとやるとそのファイルをロードして
REPL内から参照できる

```repl
> .load message.js
"use strict"
let messages = [
  "hi"
  ];
'use strict'
> messages
[ 'hi' ]
> 
> 
```

書いたコードを保存する

```
> 
> message.map(e => console.log(e))
ReferenceError: message is not defined
> messages.map(e => console.log(e))
hi
[ undefined ]
> messages.map(e => console.log(e))
hi
[ undefined ]
> 
> .save positiveMessage.js
Session saved to: positiveMessage.js
```

