const express = require("express");
const { UserModel, TodoModel } = require("./db.js");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "secret";

mongoose.connect(
  
);


const app = new express();
app.use(express.json());

app.post("/signup", async function (req, res) {
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;

  await UserModel.create({
    email: email,
    usernamm: username,
    password: password,
  });

  res.json({
    message: "You are now logged in",
  });
});

app.post("/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
    password: password,
  });

  if (response) {
    const token = jwt.sign(
      {
        id: response._id.toString(),
      },
      JWT_SECRET
    );

    res.json({
      message: token,
    });
  } else {
    res.status(403).json({
      message: "Invalid Credentials",
    });
  }
});

app.post("/todo", function (req, res) {});

app.get("/todos", function (req, res) {});

app.listen(3000);
