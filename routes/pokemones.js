/*  
    Rutas de los pokemones /pokemones
    host = /api/pokemones
*/
const {Router} = require('express');
const { listarPokemones } = require('../controllers/pokemones');
const router = Router();

//Obtener Usuarios
router.get('/', listarPokemones);

module.exports = router;