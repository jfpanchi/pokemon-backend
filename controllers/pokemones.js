const {response} = require('express');
const Pokemones = require('../models/Pokemones');

const listarPokemones = async(req, res=response) => {
    const pokemones = await Pokemones.find();
    try {
        res.json({
            ok: true,
            msg: 'listarPokemones',
            pokemones
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Comuniquese con el administrador'
        });
    }
}

module.exports ={
    listarPokemones
}