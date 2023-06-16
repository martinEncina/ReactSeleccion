const mongoose = require("mongoose");
const Schema = mongoose.Schema 

const jugadorSchema = new Schema(
    {
        name: { type: String, required: true },
        number: { type: Number, required: true },
        score: { type: Number, required: true },
        position: { type: String, required: true },
        originClub: { type: String, required: true },
        matches: { type: Number, required: true },
        goals: { type: Number, required: true },
        foto: { type: String, required: true },
},{
   timestamps: true 
})

const Jugador = mongoose.model("jugador", jugadorSchema);

module.exports = Jugador;