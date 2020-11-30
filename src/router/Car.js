const { Router } = require('express');
const Ruta = Router();

//controladores
const { GetCar,DeleteCar,PostCar,PutCar } = require('../controllers/controCar');

Ruta.get('/Card', GetCar);
Ruta.post('/Card', PostCar);
Ruta.put('/Card', PutCar);
Ruta.delete('/Card', DeleteCar);


module.exports = Ruta;