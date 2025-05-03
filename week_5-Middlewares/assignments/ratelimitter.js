const express = require("express");
const app = express();

let numberOfRequestsForUser = {};
setInterval(() => {
    numberOfRequestsForUser = {};
}, 1000)

//getting user ID from the header.
app.use(function (req, res, next) {
    const userId = req.headers["user-id"];
    // why this? because it will be undefined initally
    if (numberOfRequestsForUser[userId]) {
        numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] + 1;
        // if request is more than 5 limit the user
        if (numberOfRequestsForUser[userId] > 5) {
            res.status(404).send("no entry")
        } else {
            next();
        }
    }else {
        numberOfRequestsForUser[userId] = 1;
        next();
    }
})