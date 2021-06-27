const graphql = require("graphql")
const Movie = require("../models/movie.js")
const Director = require("../models/director.js")

// どのようにデータを扱うか、リレーションなどはどうするかを定義
const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema, GraphQLInt } = graphql

const MovieType = new GraphQLObjectType({
  name: "Movie",
  //読み込み順番によってリレーション先のtypeが読み込めないことがあるためクロージャーで囲い、カプセル化する
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: {type: GraphQLString }
  })
}) // オブジェクトを生成

const DirctorType = new GraphQLObjectType({
  name: "Director",
  fields: () => ({
    id: { type: GraphQLID},
    name: { type: GraphQLString},
    age: {type: GraphQLInt}
  })
})
// 外部からこのMOveTypeを取得できるようにqueryを定義
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType, // moveを取得したいので
      args: {id: { type: GraphQLID}},
      resolve(_parents, args){ // argsで受け取ったものでデータベースに問い合わせる
        return Movie.findById(args.id) // model
      }
    },
    director: {
      type: DirctorType,
      args: {id: { type: GraphQLID }}, // string型とid型を共有してstringを返す
      resolve(_parents, args){
        return Director.findById(args.id)
      }
    }
  }
})


const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addMovie: { // moutation名
      type: MovieType,
      args: { name: {type: GraphQLString}, genre:{type: GraphQLString} },
      resolve(_, args){
        const movie = new Movie({
          name: args.name,
          genre: args.genre
        })
        return movie.save() // mongodbに送って追加した値を返してくれるので最後リターンする
      },
    },
    addDirector: {
      type: DirctorType,
      args: { name: { type: GraphQLString}, age: { type: GraphQLInt}},
      resolve(_, args){
         director = new Director({
          name: args.name,
          age: args.age
        })
        return director.save()
      }
    }
  }
})

// schemaに追加。
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

























