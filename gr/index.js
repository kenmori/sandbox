const { GraphQLServer } = require('graphql-yoga')

const typeDefs = `
  type Query {
    hello(name: String): String!
    text(textCondition: TextCondition!): [Text]
  }
  type Text {
      textId: ID!
      textData: String!
  }
  input TextCondition {
    textId: [ID]!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
    text: (obj, arg, context, info) => {
        console.log(arg, "arg");
        console.log(arg.textCondition.textId);
        if(arg.textCondition.textId.length){
            return [
                { textId: "T1000", textData: "Hello GraphQL" },
                { textId: "T2000", textData: "Hello GraphQL2" }
            ]
        }
    }
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(() => console.log('Server is running on localhost:4000'))