// const express = require("express");

// const app = express();

// var users = [
//   {
//     name: "John",
//     kidneys: [
//       {
//         healthy: false,
//       },
//     ],
//   },
// ];

// app.get('/', function (req, res) {
//     const johnKidneys = users[0].kidneys;
//     const numberOfKidneys = johnKidneys.length;
//     let numberOfHealthyKidneys = 0;
//     for (let i = 0; i < johnKidneys.length; i++) {
//         if (johnKidneys[i].healthy) {
//             numberOfHealthyKidneys++;
//         }
//     }
//     const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
//     res.json({
//         numberOfKidneys,
//         numberOfHealthyKidneys,
//         numberOfUnhealthyKidneys,
//     })
// })

// app.post('/', function (req, res) {
    
// })

// app.put('/', function (req, res) {
    
// })

// app.delete('/', function (req, res) {
    
// })

// app.listen(3000)

// Assignment

const express = require('express') 

const app = express()

app.get('/sum', function (req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a + b
    })
})


app.get('/difference', function (req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a - b
    })
})



app.get('/multiply', function (req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a * b
    })
})



app.get('/divide', function (req, res) {
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)
    res.json({
        ans: a / b
    })
})




app.listen(3000)