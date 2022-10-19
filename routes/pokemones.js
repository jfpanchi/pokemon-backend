
const {Router} = require('express');
const { listarPokemones } = require('../controllers/pokemones');
const router = Router();
//Pokemon
/**
 * @swagger
 * components: 
 *  schemas:
 *      Pokemon:
 *        type: object
 *        properties:
 *          id:
 *           type: string
 *           description: identificador Pokemon PokeApi
 *          nombre:
 *           type: string
 *           description: Nombre del Pokemon
 *          descripcion:
 *           type: string
 *           description: descripcion del Pokemon
 *          tipo:
 *           type: string
 *           description: tipo del Pokemon
 *          evolucion:
 *           type: Array
 *           description: Lista de nombres de la evoluciòn del Pokemon
 *          altura:
 *           type: number
 *           description: Altura del Pokemon
 *          peso:
 *           type: number
 *           description: Peso del Pokemon
 *          imagen:
 *           type: number
 *           description: Imagen del Pokemon 
 *        required:
 *          - id
 *          - nombre
 *          - descripcion
 *             
 */

//Listar Pokemones
/**
 * @swagger
 * /api/pokemones:
 *  get:
 *      summary: Lista los Pokemones
 *      tags: [Pokemon]
 *      responses: 
 *          200: 
 *              description: Listar Pokemones      
 */
router.get('/', listarPokemones);

module.exports = router;