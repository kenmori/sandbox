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

```
{
  user(login: "iteachonudemy") {
    login,
    bio
  }
}
{
  user(login: "gipcompany"){
    bio
  }
}
```

このように書くと トップレベルでは
Query と{}の間に何もない場合省略できるが、

隠れている状態を anonimouse operation
は一回分のリクエストには 1 つしか書くことができない
そのエラーが出る
「アノニマスオペレーションはオンリーワンじゃないといけない」

```
query getUser1{
  user(login: "iteachonudemy") {
    login,
    bio
  }
}

query getUser2{
  user(login: "iteachonudemy") {
    login,
    bio
  }
}
```

getUser1、getUser ２がオペレーションネーム
重複しないようなユニークな名前にする

10. 変数

hogehoge が動的に変わるときどうするのか

```
{
  user(login: "hogehoge") {
    login,
    bio
  }
}
```

変数を定義

```
{"login": "hogehoge"}

```

\$login を使う

```
query ($login: String!){
  user(login: $login) {
    login,
    bio
  }
}

```

String!はログイン名は null は許されないので!を記述 query に引数で変数を渡す

11 ミューテーション
クエリーではデータの更新や削除はできない
コレをするにはミューテーションという機能を使う
以下ミューテーションを使ってデータを更新する(create, update, delete)

addStar
removeStar

スカラー型は文字列型や数値型
オブジェクト型はスカラー型が複数組み合わさった複雑なもの

AddStarInput はオブジェクト型
ドキュメントを見ると AddStarInput は StarableId を記述する必要がある。(レポジトリの識別子)
それをこちらは知らないので取得する必要がある

Query -> repository が Repository 型を返し、そこには id が含まれることがわかる

```
{
  repository(owner: "kenmori", name: "JavaScript") {
    id
    name
    url
  }
}
//////response

{
  "data": {
    "repository": {
      "id": "MDEwOlJlcG9zaXRvcnkyNjM0MzI5NQ==",
      "name": "JavaScript",
      "url": "https://github.com/kenmori/JavaScript"
    }
  }
}
```

で得た id をミューテーションで実行

```
query repository {
  repository(owner: "kenmori", name: "JavaScript") {
    id
    name
    url
  }
}

mutation addStar {
  addStar(input: {starrableId: "MDEwOlJlcG9zaXRvcnkyNjM0MzI5NQ=="}) {
    starrable {
      id
      viewerHasStarred
    }
  }
}

```

12 インラインフラグメント

13
スカラー型＿・・・String など。GraphQL が用意しているビルドイン・これ以上分解できない最小単位

14
Relay-style cursor pagination

https://www.apollographql.com/docs/react/features/pagination.html#relay-cursors

Node はデータを抽象化した呼び名

after が示すカーソル情報より first:５件分を要求する

```
valiables
{
  "after": null,
  "before": null,
  "first": 5,
  "last": null,
  "query": "フロントエンドエンジニア"
}

query searchRepositories($first: Int, $after: String, $before: String, $last: Int, $query: String!) {
  search(first: $first, after: $after, before: $before, last: $last, query: $query, type: REPOSITORY) {
   pageInfo {
    endCursor
    hasNextPage
    hasPreviousPage
    startCursor
  	}
  }
}
```

coursle、位置情報は Base64 でエンコードされて返されている
確認

https://repl.it/site/jobs

```
const cursors = ["Y3Vyc29yOjE=", "Y3Vyc29yOjI=","Y3Vyc29yOjM=","Y3Vyc29yOjQ=","Y3Vyc29yOjU=",]

const results = cursors.map(cursor => {
  return new Buffer.from(cursor, "base64").toString("binary")
})
results
```

https://github.com/DiveIntoHacking/udemy-graphql-with-react-intro-search-repos

apollo-boost
graphql 開発に必要な一式。
例えば、react は react アプリケーション開発に必要なパッケージ creat-react-app

apollo-cache-inmemory
キャッシュ機能を追加する機能

apollo-link-http
エンドポイントを設定
リクエストをカスタマイズする

applo-link
ミドルウェアをカスタマイズ
github トークンを httpHEAder の aouthraization に追加する機能

graphql-tag
クエリー文字列にコンバートするために利用
テンプレートを gql ヘルパーにテンプレートリテラルで書かれた graphql のコードを食わせることでコンバートされて変数として利用できる

# react-apollo

https://github.com/apollographql/react-apollo

# apollo-link

https://www.apollographql.com/docs/link/links/http.html
