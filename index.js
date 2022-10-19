const path = require("path");
const express = require('express');
const { dbConnection } = require('./database/config');
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Pokemon Api Challenge",
            version: "1.0.0"
        },
        servers: [
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}
require('dotenv').config();
const app = express();

//Conexión Base de datos
dbConnection();

//Directorio público
app.use(express.static('public'));
// Lectura y parse
app.use(express.json());

//Rutas
// POKEMONES: listar
app.use('/api/pokemones',require('./routes/pokemones'));
// DOCUMENTACIÓN: swagger
app.use('/api/doc',swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));

//Escuchar peticiones 
app.listen(process.env.PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});
