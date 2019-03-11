GraphQL
API で使用するための問い合わせ言語
あるサーバーに対してのデータの問い合わせをする新たな言語

1.必要な分だけ、必要なリソースを得ることができる
リクエストが要求する属性(フィールド)、name 以外の属性が必要になった場合、name の同列に
height と mass を追加すると応答を得ることができる

2.  1 度のリクエストで関連データを取得できますよ
    関連する属性に対しても要求できる。
    多くの関連情報もクエリに含めて、1 往復のトランザクションで要求と応答を実行することができる

3.

GraphQL では必要なデータはフィールドを指定して要求するが、
このフィールドは必ず型が決まっていますよ
型はサーバーの方でスキーマで定義されているが、この定義が変更されない限り
型は常に定まっている

提供する側、のデータはすでに定まっていることが保証されるので
それを受け取るアプリケーション側は型が決まっている

REST と GraphQL と比較する
REST・・・リソースごとにエンドポイントが決まっていてアプリケーションに必要となるリソースに応じてエンドポイントを適宜切り替えて返す
リソースの形は決まっていて、不必要な情報も返って来る

GraphQL
・エンドポイントが一つ
・取得できるデータ取得できるデータの構造はフレキシブル

4. github が公開している GraphQL API エクスプローラを使うために認証を与える

https://developer.github.com/v4/explorer/

コレを使うために認可を与えるために認証する

クエリ・・・一つの操作の種類。データを取得する際にする操作

document 内の
`viewer: User!`
というのは
「viewer というフィールドは User 型のデータである」
!で型が修飾されている場合は何かしらの値が入っていることを意味する nonNull なデータ。null 以外のデータ。

7.
https://github.com/facebook/graphql

エイリアス
同じフィールドを並列で要求することはできないのでその際に使う

```
user1: user(){
login
}
user2: user(){
login
}
```

8. フラグメント

ドライじゃない部分(冗長な記述)が見受けられるとき。冗長な書き方はメンテナンスコストがかかる

こうなると大変

```
query moirita {
 user1: user(login: "iteachonudemy"){
  bio
  login
  avatarUrl
  bioHTML
  company
  companyHTML
  createdAt
	}
   user2: user(login: "gipcompany"){
  bio
  login
  avatarUrl
  bioHTML
  company
  companyHTML
  createdAt
	}
}
```

なので

```
fragment commonFields on User {
  bio
  login
  avatarUrl
  bioHTML
  company
  companyHTML
  createdAt
}
```

//User はフラグメント由来の型を on の後ろにかく
// commonFields はフラグメント名前

をトップレベルに作り展開する(フラグメントスプレッド)

```
{
    user1: user(login: "hogehoge"){
        ...commonFields
    }
        user2: user(login: "fafafafa"){
        ...commonFields
    }
}
```

9. 操作名 Operation Name
