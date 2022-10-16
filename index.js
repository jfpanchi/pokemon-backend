const express = require('express');
require('dotenv').config();
const app = express();

//Directorio público
app.use(express.static('public'));

//Escuchar peticiones 
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
