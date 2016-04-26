// *** main dependencies *** //
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var dotenv = require('dotenv').config();
var session = require('express-session');
var passport = require('./lib/auth');


// *** routes *** //
// var routes = require('./routes/index.js');
var admins = require('./routes/admins.js');
var teachers = require('./routes/teachers.js');
var schools = require('./routes/schools.js');
var classes = require('./routes/classes.js');
var guardians = require('./routes/guardians.js');
var students = require('./routes/students.js');
var activities = require('./routes/activities.js');
// var authRoutes = require('./routes/auth_routes.js');

// *** express instance *** //
var app = express();


// *** allow for front-end requests *** //
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, api_key, Authorization, Accept, *');
  next();
});


// *** config middleware *** //
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY || 'change_me',
  resave: false,
  saveUninitialized: true
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../client')));


// *** main routes *** //
// app.use('/', routes);
app.use('/admins', admins);
app.use('/teachers', teachers);
app.use('/schools', schools);
app.use('/classes', classes);
app.use('/guardians', guardians);
app.use('/students', students);
app.use('/activities', activities);
// app.use('/auth', authRoutes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


// *** error handlers *** //

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: {}
  });
});


module.exports = app;