// Routes.js - Módulo de rutas
const express = require('express');
const router = express.Router();
const push = require('./push.js')

const mensajes = [

  {
    _id: 'XXX',
    user: 'spiderman',
    mensaje: 'Hola Mundo'
  }

];


// Get mensajes
router.get('/', function (req, res) {
  // res.json('Obteniendo mensajes');
  res.json( mensajes );
});


// Post mensaje
router.post('/', function (req, res) {
  
  const mensaje = {
    mensaje: req.body.mensaje,
    user: req.body.user
  };

  mensajes.push( mensaje );

  console.log(mensajes);


  res.json({
    ok: true,
    mensaje
  });
});

//Almacenar la subscripcion de los dispositivos
router.post('/subscribe', (req,res) => {
  const subscripcion = req.body;

  console.log(subscripcion);

  push.addSubscription(subscripcion);


  res.json('subscribe');
})

//Mandar key publico a los clientes para que el cliente lo pueda procesar
//y luego mandarnos la subscripcion
router.get('/key', (req,res) => {
  const key = push.getKey();
  res.send(key);
})

//Enviar notificacion PUSH a las personas 
//que se nosotros queramos
//Esto es para controlar el push desde el POSTMAN O THUNDERCLIENT
//El PUSH se controla desde el backend server
router.post('/push', (req,res) => {
  res.json('key publico');
})


module.exports = router;