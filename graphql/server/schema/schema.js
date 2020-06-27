const graphql = require("graphql") // graphql object

// どのようにデータを扱うか、リレーションなどはどうするかを定義

const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql

const MovieType = new GraphQLObjectType({
  name: "Move",
  //読み込み順番によってリレーション先のtypeが読み込めないことがあるためクロージャーで囲い、カプセル化する
  fileds: () => ({
    id: {type: GraphQLID},
    name: { type: GraphQLString},
    genre: {type: GraphQLString}
  })
}) // オブジェクトを生成

// 外部からこのMOveTypeを取得できるように
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: {id: { type: GraphQLString}},//　検索時に使用するパラメータ
      resolve(parents, args){
        
      } // resolve関数・・argsで取得したidを使ってデータベースからデータを取ってくる役割
    }
  }
})