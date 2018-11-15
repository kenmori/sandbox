const express = require("express");
const app = express();
const PORT = 8888;
app.get("/time", (req, res) => {
  const time = new Date().toLocaleTimeString();
  res.status(200).send(`The Time is ${time}`);
});
