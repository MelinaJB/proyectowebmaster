var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();

var indexRouter = require('./routes/index');//linea25
var tipsRouter = require('./routes/tips'); //linea26
var propuestasRouter = require('./routes/propuestas'); //linea27
var nosotrosRouter = require('./routes/nosotros'); //linea28
var contactoRouter = require('./routes/contacto'); //linea29

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);//linea7
app.use('/tips', tipsRouter); //linea8
app.use('/propuestas', propuestasRouter); //linea9
app.use('/nosotros', nosotrosRouter); //linea10
app.use('/contacto', contactoRouter); //linea11

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
