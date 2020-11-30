const { Router } = require('express');
const Ruta = Router();

//controladores
const { Get,Delete,Post,Put } = require('../controllers/controPedidos');

Ruta.get('/PD', Get);
Ruta.post('/PD', Post);
Ruta.put('/PD', Put);
Ruta.delete('/PD', Delete);


module.exports = Ruta;