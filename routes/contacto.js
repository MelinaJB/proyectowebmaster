var express = require('express');
var router = express.Router();

router.get('/contacto', function(req, res, next){
    res.render('contacto')
})