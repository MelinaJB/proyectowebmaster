var express = require('express');
var router = express.Router();
//var bsasModels = require('../../models/bsasModels');

router.get('/', function(req, res, next){
    //var propuestas = await bsasModels.getPropuestasbsas();
    res.render('admin/propuestas',{
        layout: 'admin/layout',
        usuario: req.session.nombre,
        //propuestas
    })
});

module.exports = router;