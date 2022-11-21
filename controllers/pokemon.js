//----------------------------------------------
// Dependencies 
//----------------------------------------------

const express = require('express');
const Pokemon = require('../models/pokemon');


//----------------------------------------------
// Router
//----------------------------------------------

const router = express.Router();


//----------------------------------------------
// Routes
//----------------------------------------------
// Index routes
//----------------------------------------------

router.get('/', (req, res) => {res.redirect('/pokedex')});

router.get('/pokedex', (req, res) => {
    res.render('index.ejs', {
        pokemonData: Pokemon,
    })
})


//----------------------------------------------
// New route
//----------------------------------------------

router.get('/pokedex/new', (req, res) => {
    res.render('new.ejs')
})


//----------------------------------------------
// Edit route
//----------------------------------------------

router.get('/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemonData: Pokemon[req.params.id],
        pokemonStats: req.params.id
    })
})


//----------------------------------------------
// Create route
//----------------------------------------------

router.post('/pokedex', (req, res) => {
    Pokemon.unshift(req.body)
    res.redirect('/pokedex')
})


//----------------------------------------------
// Show route
//----------------------------------------------

router.get('/pokedex/:id', (req, res) => {
    res.render('show.ejs', {
        pokemonData: Pokemon,
        pokemonStats: req.params.id
    })
})

//----------------------------------------------
// Update route
//----------------------------------------------

router.put('/pokedex/:id', (req, res) => {
    Pokemon[req.params.id] = req.body
    res.redirect('/pokedex')
})

//----------------------------------------------
// Delete route
//----------------------------------------------
router.delete('/pokedex/:id', (req, res) => {
    Pokemon.splice(req.params.id, 1)
    res.redirect('/pokedex')
})


module.exports = router