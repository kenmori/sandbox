const mongoose = require("mongoose")
const Schema = mongoose.Schema

// insert Documentで作ったやつ
const movieSchema = new Schema({
  name: String,
  genre: String
})


// modelの作成
module.exports =  mongoose.model("Movie", movieSchema) // model name / schema
