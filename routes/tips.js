var express = require('express');
var router = express.Router();

//activo
router.get('/', function(req, res, next){
    res.render('tips',{
        isTips: true
    })
});

module.exports = router;
