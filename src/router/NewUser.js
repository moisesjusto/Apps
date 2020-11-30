const {Router}= require('express');
const Ruta = Router();

//controladores
const {GetUser,PostUser,PutUser,DeleteUser,GetUserID,Polo,Pijamas,Vermuda,Vestidos,Blusas,Capris,Jeans,Playa}= require('../controllers/ControNewUser');

Ruta.get('/polo',Polo);
Ruta.get('/vermuda',Vermuda);
Ruta.get('/pijama',Pijamas);
Ruta.get('/vestido',Vestidos);
Ruta.get('/blusa',Blusas);
Ruta.get('/capri',Capris);
Ruta.get('/jeans',Jeans);
Ruta.get('/playa',Playa);
Ruta.post('/User',GetUser);
Ruta.post('/UserID',GetUserID);
Ruta.post('/NewUser',PostUser);
Ruta.put('/NewUser',PutUser);
Ruta.delete('/NewUser',DeleteUser);


module.exports = Ruta;