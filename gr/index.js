const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
    text: Text
  }
  type Text {
      textId: ID!
      textData: String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    text: (obj, arg, context, info) => ({
        textId: "T1000",
        textData: "Hello GraphQL"
    })
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on localhost:4000'))