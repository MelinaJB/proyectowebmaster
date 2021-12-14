var express = require('express');
var router = express.Router();

router.get('/nosotros', function(req, res, next){
    res.render('nosotros')
})