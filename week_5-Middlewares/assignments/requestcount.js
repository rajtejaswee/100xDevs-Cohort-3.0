const express = require("express");
const app = express();

let requestCount = 0;

//global middleware: every request and route has to go through this middleware.
app.use(function (req, res, next) {
  requestCount = requestCount + 1;
  next();
});

app.get("/user", function (req, res) {
  res.status(200).json({ name: "john" });
});

app.get("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.use(3000);
