require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//init
const app = express();
require('./DB');

//midergues
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//port
app.set('port',process.env.PORT || 4000)

//router
app.get('/',(req,res)=>{
    res.send('ok')
})
//http User
app.use(require('./router/NewUser'));
//http Notes
app.use(require('./router/Notes'));
//http Card
app.use(require('./router/Car'));
//http FT
app.use(require('./router/Fatura'));
//http PD
app.use(require('./router/Pedidos'));



app.listen(app.get('port'),()=>{
    console.log(`init in ${app.get('port')}`);
})