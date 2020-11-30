const { Router } = require('express');
const Ruta = Router();

//controladores
const { GetNotes, PostNotes, PutNotes, DeleteNotes } = require('../controllers/contronotas');

Ruta.get('/Notes', GetNotes);
Ruta.post('/Notes', PostNotes);
Ruta.put('/Notes', PutNotes);
Ruta.delete('/Notes', DeleteNotes);


module.exports = Ruta;