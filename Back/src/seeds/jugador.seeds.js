const mongoose = require('mongoose');
const dotenv = require("dotenv");
const Jugador = require("../api/models/jugador.models")
dotenv.config();

const arrayJugadores =  [

	{
		name: 'Acuña Marcos',
		number: 8,
		score: 14,
		position: 'Defensor',
		originClub: 'Sevilla FC',
		matches: 42,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/macunia.png',
	},
	{
		name: 'Alvarez Julián',
		number: 9,
		score: 32,
		position: 'Delantero',
		originClub: 'Manchester City',
		matches: 11,
		goals: 2,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/jalvarez.png',
	},
	{
		name: 'Armani Franco',
		number: 1,
		score: 3,
		position: 'Arquero',
		originClub: 'Club Atlético River Plate',
		matches: 18,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/armani.png',
	},	
	{
		name: 'Almada Thiago',
		number: 17,
		score: 15,
		position: 'Mediocampista',
		originClub: 'Atlanta United FC',
		matches: 1,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/almada.png',
	},	
	{
		name: 'De Paul Rodrigo',
		number: 7,
		score: 35,
		position: 'Mediocampista',
		originClub: 'Atlético de Madrid',
		matches: 43,
		goals: 2,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/depaul.png',
	},
	{
		name: 'Di Maria Ángel',
		number: 11,
		score: 10,
		position: 'Delantero',
		originClub: 'Juventus de Turín',
		matches: 123,
		goals: 25,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/dimaria.png',
	},
	{
		name: 'Dybala Paulo',
		number: 21,
		score: 30,
		position: 'Delantero',
		originClub: 'AS Roma',
		matches: 34,
		goals: 3,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/dybala.png',
	},
	{
		name: 'Fernandez Enzo',
		number: 24,
		score: 35,
		position: 'Mediocampista',
		originClub: 'SL Benfica',
		matches: 2,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/efernandez.png',
	},	
	{
		name: 'Foyth Juan',
		number: 2,
		score: 25,
		position: 'Defensor',
		originClub: 'Villarreal FC',
		matches: 15,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/foyth.png',
	},
	{
		name: 'Gómez Alejandro Darío',
		number: 20,
		score: 4,
		position: 'Delantero',
		originClub: 'Sevilla FC',
		matches: 15,
		goals: 3,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/pgomez.png',
	},
	{
		name: 'Correa Angel',
		number: 25,
		score: 27,
		position: 'Delantero',
		originClub: 'Atlético de Madrid',
		matches: 22,
		goals: 3,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/acorrea.png',
	},
	{
		name: 'Mac Allister Alexis',
		number: 15,
		score: 32,
		position: 'Mediocampista',
		originClub: 'Brighton & Hove Albion',
		matches: 7,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/macallister.png',
	},	
	{
		name: 'Martinez Emiliano',
		number: 23,
		score: 25,
		position: 'Arquero',
		originClub: 'Aston Villa',
		matches: 18,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/emartinez.png',
	},
	{
		name: 'Martinez Lautaro',
		number: 22,
		score: 75,
		position: 'Delantero',
		originClub: 'Inter de Milán',
		matches: 40,
		goals: 21,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/lautaro.png',
	},		
	{
		name: 'Martinez Lisandro',
		number: 16,
		score: 50,
		position: 'Defensor',
		originClub: 'Manchester United',
		matches: 9,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/lmartinez.png',
	},
	{
		name: 'Messi Lionel',
		number: 10,
		score: 50,
		position: 'Delantero',
		originClub: 'Paris Saint Germain',
		matches: 164,
		goals: 90,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/messi.png',
	},
	{
		name: 'Molina Nahuel',
		number: 26,
		score: 18,
		position: 'Defensor',
		originClub: 'Atlético de Madrid',
		matches: 19,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/molina.png',
	},	
	{
		name: 'Montiel Gonzalo',
		number: 4,
		score: 12,
		position: 'Defensor',
		originClub: 'Sevilla FC',
		matches: 18,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/montiel.png',
	},	
	{
		name: 'Otamendi Nicolás',
		number: 19,
		score: 3,
		position: 'Defensor',
		originClub: 'SL Benfica',
		matches: 92,
		goals: 4,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/otamendi.png',
	},
	{
		name: 'Palacios Exequiel',
		number: 14,
		score: 15,
		position: 'Mediocampista',
		originClub: 'Bayern 04 Leverkusen',
		matches: 20,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/epalacios.png',
	},
	{
		name: 'Paredes Leandro',
		number: 5,
		score: 15,
		position: 'Mediocampista',
		originClub: 'Juventus de Turín',
		matches: 45,
		goals: 4,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/paredes.png',
	},
	{
		name: 'Pezzella Germán',
		number: 6,
		score: 5,
		position: 'Defensor',
		originClub: 'Real Betis Balompié',
		matches: 31,
		goals: 2,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/pezzella.png',
	},
	{
		name: 'Rodriguez Guido',
		number: 18,
		score: 28,
		position: 'Mediocampista',
		originClub: 'Real Betis Balompié',
		matches: 25,
		goals: 1,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/grodriguez.png',
	},
	{
		name: 'Romero Cristian',
		number: 13,
		score: 55,
		position: 'Defensor',
		originClub: 'Tottenham Hotspur',
		matches: 12,
		goals: 1,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/romero.png',
	},
	{
		name: 'Rulli Geronimo',
		number: 12,
		score: 10,
		position: 'Arquero',
		originClub: 'Villarreal FC',
		matches: 4,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/rulli.png',
	},
	{
		name: 'Tagliafico Nicolás',
		number: 3,
		score: 9,
		position: 'Defensor',
		originClub: 'Olympique de Lyon',
		matches: 42,
		goals: 0,
		foto: 'https://proyectselecion.s3.eu-west-3.amazonaws.com/tagliafico.png',
	},

	
];

// Esta funcion se encarga de guardar el array con nuestros 
// datos, en la BBDd.
// Contiene la logica normal de las semillas.
// Miro si hay datos. Si los hubiera los borro.
// Inserto mi array de datos que he construido previamente.


  mongoose.connect(process.env.DB_URL)
  .then(async () => {
	  const allJugadores = await Jugador.find();
	  if(allJugadores.length > 0) {
		  await Jugador.collection.drop();
		  console.log("Jugadores borradas");
	  };
  })
  .catch ((error) => console.log ("error borrado Jugador", error))
  .then(async () => {
	  const jugadoresMap = arrayJugadores.map((jugador) => new Jugador(jugador));
	  await Jugador.insertMany(jugadoresMap),
	  console.log("Jugadores insertados");
  })
  .catch ((error) => console.log ("error insertando jugadores", error))
  .finally(() => mongoose.disconnect())