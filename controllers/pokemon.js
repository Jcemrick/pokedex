// Dependencies 
const express = require('express');
const Pokemon = require('../models/pokemon');


// Router
const router = express.Router();

// Routes

// Index routes
router.get('/', (req, res) => {res.redirect('/pokedex')});

router.get('/pokedex', (req, res) => {
    res.render('index.ejs', {
        pokemonData: Pokemon,
    })
})

// New route
router.get('/pokedex/new', (req, res) => {
    res.render('new.ejs')
})

// Edit route
router.get('/pokedex/edit', (req, res) => {
    res.render('edit.ejs')
})

// Show routes
router.get('/pokedex/:id', (req, res) => {
    res.render('show.ejs', {
        pokemonData: Pokemon,
        pokemonStats: req.params.id
    })
})


module.exports = router