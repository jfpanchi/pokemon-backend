const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const app = express();

//Conexión Base de datos
dbConnection();

//Directorio público
app.use(express.static('public'));

//Rutas
// POKEMONES: listar
app.use('/api/pokemones',require('./routes/pokemones'));

//Escuchar peticiones 
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
