const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');
const hsts = require('hsts');
const compression = require('compression');

require('dotenv').config()
const app = express();



//To allow cross origin request
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    next();
});

app.use(hsts({ maxAge: 5184000 }));
app.use(compression());


//body parser middlewares
app.use(bodyParser.json({ limit: '20mb' }));
app.use(bodyParser.urlencoded({ extended: false }));

//exclude partial from static serving/*
app.get('/partial/:filename', function (req, res) {
    res.status(403).send("not authorised");
});

app.use(express.static(path.join(__dirname, 'views')));


app.get('/files/:filename', function (req, res) {
    res.sendFile(path.join(__dirname, './public', req.params.filename));
});

module.exports = app;
