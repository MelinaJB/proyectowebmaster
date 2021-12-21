var express = require('express');
var router = express.Router();

/* GET home page. */ //activo
router.get('/', function(req, res, next) {
  res.render('index', { 
    isHome:true
   });
});




module.exports = router;
