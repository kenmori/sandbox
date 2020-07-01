const graphql = require("graphql")
const Movie = require("../models/movie.js")

// どのようにデータを扱うか、リレーションなどはどうするかを定義
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = graphql

const MovieType = new GraphQLObjectType({
  name: "Move",
  //読み込み順番によってリレーション先のtypeが読み込めないことがあるためクロージャーで囲い、カプセル化する
  fileds: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: {type: GraphQLString }
  })
}) // オブジェクトを生成

// 外部からこのMOveTypeを取得できるように
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      // type: MovieType,
      args: {id: { type: GraphQLString}},//　検索時に使用するパラメータ
      resolve(_, args){
        // model
        return Movie.findById(args.id)
      } // resolve関数・・argsで取得したidを使ってデータベースからデータを取ってくる役割
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})