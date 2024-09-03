require("dotenv").config();
const express = require("express");

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/login", (req, res) => {
  res.send("<h1>Login to our platform.");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app is running on port ${port}`);
});
