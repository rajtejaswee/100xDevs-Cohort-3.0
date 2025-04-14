const express = require('express')
const app = express();


function isOldEnough(req, res, next) {
    const age = req.query.age;
    if (age >= 14) {
        next();
    } else {
        res.json({
            msg: " You are not old yet!"
        })
    }
}



app.get('/ride1', isOldEnough, function (req, res) {
    res.json({
        msg: "You have riden the the ride1"
    })
})

app.listen(3000)