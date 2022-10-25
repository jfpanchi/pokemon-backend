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

Enlace para revisar la docmuentación con swagger
<https://pokemon-api-challenge.herokuapp.com/api/doc>


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

Proceso de Desarrollo
-----
[Initial commit](https://github.com/jfpanchi2/pokemon-backend/commit/43d03751bce7e295186ae316f8f438356ec52029)
: Creación del repositorio del proyecto

[Configuración Inicial](https://github.com/jfpanchi2/pokemon-backend/commit/0beb18725644f5397434356a4306e3b1c3fdcff3) : Se realizo la configuración inicial del backend

[Conexión Base de Datos](https://github.com/jfpanchi2/pokemon-backend/commit/b876fc67723825f78b24815501595d9f317dec29) : Se realizo la conexión con la base de datos en la nube utilizando Mongo Atlas

[Desarrollo endpoint Listar Pokemones](https://github.com/jfpanchi2/pokemon-backend/commit/2f996b592d2738cdf7dd7cac98a832fa6bd76052) : Se desarrollo el modelo, controlador, ruta para el endpoint Listar Pokemones

[Documentacion Endpoint Listar Pokemones](https://github.com/jfpanchi2/pokemon-backend/commit/fe8f3c0b6f129f6fff04ee7b48af3bfbcfd6dd5c) :
Se documento utilizando swagger el Endpoint Listar Pokemones