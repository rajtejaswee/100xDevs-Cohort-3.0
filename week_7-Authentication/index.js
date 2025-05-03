const express = require("express");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "Ilovesabrina";
const app = express();
app.use(express.json());
const users = [];



// auth middleware
function auth(req, res, next) {
  const token = req.headers.authorization;
  const userDetails = jwt.verify(token, JWT_SECRET);

  if (userDetails.username) {
    req.username = userDetails.username;
    next();
  } else {
    res.status(401).status({
      message: "You are not signed in!!",
    });
  }
}




app.post("/signup", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });

  res.json({
    message: "You are signed up",
  });
});


app.post("/signin", auth, function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  if (user) {
    const token = jwt.sign(
      {
        username: user.username,
      },
      JWT_SECRET
    );
    user.token = token;
    res.send({
      token,
    });
    console.log(users);
  } else {
    res.status(401).send({
      message: "Invalid username or password",
    });
  }
});


app.get("/me", auth, function (req, res) {
  const user = users.find((user) => user.username === username);
  if (user) {
    res.send({
      username: user.username,
    });
  } else {
    res.status(401).send({
      message: "Unauthorized",
    });
  }
});

app.listen(3000);
