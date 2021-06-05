const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const hsts = require('hsts');
const compression = require('compression');

require('dotenv').config()
const app = express();
const mongoose = require('mongoose')
const passport = require('passport');

require('./middleware/passport')(passport);


//db connection
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    poolSize: 4,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(
    () => {
      console.log("database connected")
    },
    (err) => {
      console.log(err, "=====")
    }
  )
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

app.use(express.static(path.join(__dirname, 'views')));

// const {userRoutes} = require('./api/user/index');

const userRoutes = require('./api/user/config/user.route')

app.use('/user', userRoutes);


module.exports = app;
