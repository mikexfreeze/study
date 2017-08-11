/**
 * Created by Micheal Xiao on 2017/6/20.
 */
var express = require('express')
var bodyParser = require('body-parser')

var app = express()

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/login', urlencodedParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    res.send('welcome, ' + req.body.username)
})

// POST /api/users gets JSON bodies
app.post('/ajax', jsonParser, function (req, res) {
    if (!req.body) return res.sendStatus(400)
    // create user in req.body
    res.send(req.body)
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});