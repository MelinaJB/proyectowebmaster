var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

router.get('/', function(req, res, next){
    res.render('contacto',{
        isContacto: true
    })
});

router.post('/', async (req, res,next)=>{
    console.log(req.body);
    var nombre = req.body.nombre;
    var email = req.body.email;
    var asunto = req.body.asunto;
    var comentarios = req.body.comentarios;

    var obj= {
        to: 'melina.jb@hotmail.com',
        subject: 'Contacto desde Pasión Turista',
        html: nombre + ' se contacta a través de Pasión turista acerca de "' + asunto + '". <br> Contactarse con ' + nombre + ' al siguiente mail: ' + email + '<br> Asunto: <br>' + comentarios
    };

    var transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      });
    
      var info = await transport.sendMail(obj);

      res.render('contacto',{
          message: 'Mensaje enviado correctamente',
          isContacto: true
      })
})

module.exports = router;