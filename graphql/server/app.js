const express = require("express")
const graphqlHTTP = require("express-graphql")
const mongoose = require("mongoose")
const schema = require("./schema/schema.js")
const app = express()
mongoose.connect("")
mongoose.connection.once("open", () => {
  console.log("db connect");
})
// endopoint
app.use("/graphql", graphqlHTTP({// このなかにschemaを定義する
  schema,
  graphiql: true
}))
app.listen(4000, () => {
  console.log("listengin listerner");
})
