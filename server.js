// Dependencies 
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const pokemonRouter = require('./controllers/pokemon')

const PORT = process.env.PORT;

const app = express();


// Middleware
app.use(morgan('tiny'));
app.use(methodOverride('_method'));
app.use(express.urlencoded({extended: true}));
app.use('/public', express.static('public'));

// Router use
app.use('/', pokemonRouter)


// Routes


// Listener
app.listen(PORT, () => console.log(`Listening on ${PORT}.`))