const express = require("express")
const express_graphql = require("express-graphql")
const mongoose = require("mongoose")
const schema = require("./schema/schema.js")
const app = express()

mongoose.connect("mongodb+srv://admin:ok365a1@cluster0.kkzgz.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology : true })
mongoose.connection.once("open", () => {
  console.log("db connecTypeGraphQL is a library that makes this process enjoyable by defining the schema using only classes and a bit of decorator magic. Example object type:t");
})
// endopoint
app.use("/graphql", express_graphql({// このなかにschemaを定義する
  schema,
  graphiql: true // backendだけでtestができるように。graphiqlを使ってapiを叩く
}))
app.listen(4000, () => {
  console.log("listengin listerner");
})
