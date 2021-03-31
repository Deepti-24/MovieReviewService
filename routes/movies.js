
const express = require('express');
const router = express.Router();

global.movies = [];

router.get('/', (req,res) => {
    res.send(movies);
});

router.post('/', (req,res) => {
    let movie = {
        title: req.body.title,
        year: req.body.year,
        genres: req.body.genres,
        reviews: []
    };
    movies.push(movie);
    res.send(movie);
});

module.exports = router;