const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const app = express();

//Directorio público
app.use(express.static('public'));
//Conexión Base de datos
dbConnection();
//Escuchar peticiones 
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
