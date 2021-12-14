var express = require('express');
var router = express.Router();

router.get('/tips', function(req, res, next){
    res.render('tips')
})