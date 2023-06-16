const Jugador = require("../models/jugador.models")


const getJugador = async(req, res) => {
    try {
        const allJugadores = await Jugador.find();
        
        return res.status(200).json(allJugadores);
    } catch (error) { 
        return res.status(500).json(error)
    }
}

module.exports = {getJugador}