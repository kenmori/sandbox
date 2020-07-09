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
// 外部からこのMOveTypeを取得できるように
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    movie: {
      type: MovieType,
      args: {id: { type: GraphQLString}},
      resolve(_, args){
        return Movie.findById(args.id)
      }
    }
  }
})


const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    addMovie: {
      type: MovieType,
      args: { name: {type: GraphQLString}, genre:{type: GraphQLString} },
      resolve(_, args){
        let movie = new Movie({
          name: args.name,
          genre: args.genre
        })
        return movie.save()
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

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})

























