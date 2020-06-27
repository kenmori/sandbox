const express = require("express")
const express_graphql = require("express-graphql")
const mongoose = require("mongoose")
const schema = require("./schema/schema.js")
const app = express()

mongoose.connect("")
mongoose.connection.once("open", () => {
  console.log("db connect");
})
// endopoint
app.use("/graphql", express_graphql({// このなかにschemaを定義する
  schema,
  graphiql: true // backendだけでtestができるように
}))
app.listen(4000, () => {
  console.log("listengin listerner");
})
