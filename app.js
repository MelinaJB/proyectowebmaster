var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
var session = require ('express-session');

var indexRouter = require('./routes/index');//linea28
var tipsRouter = require('./routes/tips'); //linea29
var propuestasRouter = require('./routes/propuestas'); //linea30
var nosotrosRouter = require('./routes/nosotros'); //linea31
var contactoRouter = require('./routes/contacto'); //linea32
var loginRouter = require('./routes/admin/login');//linea33
var adminPropuestasRouter = require('./routes/admin/propuestas');//linea34
var propuestasBsAsRouter = require('./routes/propuestasbsas');
var propuestasCuyoRouter = require('./routes/propuestascuyo');
var propuestasLitoralRouter = require ('./routes/propuestaslitoral');
var propuestasNorteRouter = require ('./routes/propuestasnorte');
var propuestasPampaRouter = require('./routes/propuestaspampa');
var propuestasPatagoniaRouter = require('./routes/propuestaspatagonia');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
  secret: 'melinajoloidovskybor',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 600000} //se le pone uno grande para trabajar dsp se puede modificar
}))

secured = async function(req, res, next){
  try{
    console.log(req.session.id_usuario);
    if(req.session.id_usuario){
      next()
    }else{
      res.redirect('/admin/login')
    }
  }catch(error){
    console.log(error)
  }
}

app.use('/', indexRouter);//linea9
app.use('/tips', tipsRouter); //linea10
app.use('/propuestas', propuestasRouter); //linea11
app.use('/nosotros', nosotrosRouter); //linea12
app.use('/contacto', contactoRouter); //linea13
app.use('/admin/login', loginRouter);//linea14
app.use('/admin/propuestas', secured, adminPropuestasRouter);//linea15
app.use('/propuestasbsas', propuestasBsAsRouter);
app.use('/propuestascuyo', propuestasCuyoRouter);
app.use('/propuestaslitoral', propuestasLitoralRouter);
app.use('/propuestasnorte', propuestasNorteRouter);
app.use('/propuestaspampa', propuestasPampaRouter);
app.use('/propuestaspatagonia', propuestasPatagoniaRouter);

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
