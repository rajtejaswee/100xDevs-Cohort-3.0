const express = require("express");
const { UserModel, TodoModel } = require("./db.js");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
ß
const JWT_SECRET = "secret";

mongoose.connect(
    "mongodb+srv://raj:<db_password>@todocluster.nq4p2jo.mongodb.net/?retryWrites=true&w=majority&appName=todoCluster"
);

const app = new express();
app.use(express.json());

app.post("/signup", async function (req, res) {
    let thrownError = false;
  const email = req.body.email;
  const username = req.body.username;
  const password = req.body.password;
    try {
        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);
        
        await UserModel.create({
          email: email,
          usernamm: username,
          password: hashedPassword,
        });
    }
    catch (e) {
        res.json({
            message:"User already exists!"
        })
        thrownError = true
    }
    if (!thrownError) {
        res.json({
            message: "You are now logged in",
          });
    }
});

app.post("/login", async function (req, res) {
  const email = req.body.email;
  const password = req.body.password;

  const response = await UserModel.findOne({
    email: email,
  });

  if (!response) {
    res.status(403).json({
      message: "User doesn't exist in the database",
    });
  }

  const passwordMatch = await bcrypt.compare(password, response.password);

  if (passwordMatch) {
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
