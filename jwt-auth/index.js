const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8888;
app.use(bodyParser.json());
app.use(cors());
app.get("/time", (req, res) => {
  const time = new Date().toLocaleTimeString();
  res.status(200).send(`The Time is ${time}`);
});

app.get("*", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

app.post("/login", (req, res) => {
  if (!req.body.username || !req.body.password) {
    res.status(400).send("Error. Please enter the correct name and password");
    return;
  }
  const users = [
    { id: 1, username: "kenji", password: "ok365a1" },
    { id: 2, username: "morita", password: "fafafa" }
  ];
  const user = users.find(u => {
    return u.username === req.body.username && u.password === req.body.password;
  });
  if (user) {
    const token = jwt.sign(
      {
        sub: user.id,
        username: user.username
      },
      "mykey",
      { expiresIn: "3 hours" }
    );
    res.status(200).send({ access_token: token });
  } else {
    res.status(401).send({ error: "authraization is bad" });
  }
});
