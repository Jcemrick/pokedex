//----------------------------------------------
// Dependencies 
//----------------------------------------------

const express = require('express');
let Pokemon = require('../models/pokemon');


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
        pokemonData: Pokemon
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

router.get('/pokedex/:id/edit', (req, res) => {
    res.render('edit.ejs', {
        pokemonData: Pokemon[req.params.id],
        index: req.params.id
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
        pokemonData: Pokemon[req.params.id],
        index: req.params.id
    })
})

//----------------------------------------------
// Update route
//----------------------------------------------

router.put('/pokedex/:id', (req, res) => {
    console.log(req.body)
    Pokemon[req.params.id] = {...Pokemon[req.params.id],...req.body}
    res.redirect('/pokedex')
})

//----------------------------------------------
// Delete route
//----------------------------------------------
router.delete('/pokedex/:id', (req, res) => {
    Pokemon = Pokemon.filter( pokemon => pokemon.id !== req.params.id)
    res.redirect('/pokedex')
})


module.exports = router