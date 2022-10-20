# pokemon-backend
 Backend PokeApi Challenge

Instalación
-----

Ejecutar el comando:

```ruby
npm install
```

Ejecución
-----

Crear un archivo .env y agregar las variables para el puerto y la cadena de conexión con la base de datos: 

```ruby
PORT=4000
DB_CNN=mongodb+srv://AdminUser:password@cluster0-shard-00-01-xxxxx.mongodb.net/exapledb?retryWrites=true&w=majority
```
Producción
-----
[MISSING-API](https://pokemon-api-challenge.herokuapp.com/)

Enlace: <https://pokemon-api-challenge.herokuapp.com/>

*Nota: Para subir la version a producción se debe agregar la url del servidor en swagger para que la documentación funcione*

```ruby
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Pokemon Api Challenge",
            version: "1.0.0"
        },
        servers: [
            {
                url: "https://dominio.com"
            }
        ]
    },
    apis: [`${path.join(__dirname, "./routes/*.js")}`]
}
```