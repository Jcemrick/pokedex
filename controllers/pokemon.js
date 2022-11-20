// Dependencies 
const express = require('express');
const Pokemon = require('../models/pokemon');


// Router
const router = express.Router();

// Routes

// Show routes
router.get('/pokedex/:id', (req, res) => {
    res.render('show.ejs', {
        pokemonData: Pokemon,
        pokemonStats: req.params.id
    })
})

// Index routes
router.get('/', (req, res) => {res.redirect('/pokedex')});

router.get('/pokedex', (req, res) => {
    res.render('index.ejs', {
        pokemonData: Pokemon,
    })
})

// New route
router.get('/pokemon/new', (req, res) => {
    res.render('new.ejs')
})

// Edit route
router.get('/pokemon/edit', (req, res) => {
    res.render('edit.ejs')
})

//


module.exports = router