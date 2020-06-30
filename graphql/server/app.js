const express = require("express")
const graphqlHTTP = require("express-graphql")
const app = express()

// endopoint
app.use("/graphql", graphqlHTTP({// このなかにschemaを定義する

}))
app.listen(4000, () => {
  console.log("listengin listerner");
})
