const express = require("express");
const jugadorRouter = express.Router();

const { getJugador } = require("../controllers/jugador.controllers");

jugadorRouter.get("/", getJugador);

module.exports = jugadorRouter;