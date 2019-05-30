var createError = require('http-errors');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

//session middleware
var session = require('express-session');
var passport = require('passport');
var methodOverride = require('method-override');

// load the env vars
require('dotenv').config();

// express app
var app = express();

// connect to the database with Mongoose
require('./config/database');

// configure passport for our app
require('./config/passport');

// require our routes
var indexRoutes = require('./routes/index');
var usersRoutes = require('./routes/users');
var listsRoutes = require('./routes/lists');
var linksRoutes = require('./routes/links');
var communityRoutes = require('./routes/community');
var friendsRoutes = require('./routes/friends');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// session middleware for passport
app.use(session({
  secret: 'illistriousRocks!',
  resave: false,
  saveUninitialized: true
}));

// mount passport
app.use(passport.initialize());
app.use(passport.session());

// mount all routes with appropriate base paths
app.use('/', indexRoutes);
app.use('/', usersRoutes);
app.use('/', listsRoutes);
app.use('/', linksRoutes);
app.use('/', communityRoutes);
app.use('/', friendsRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
