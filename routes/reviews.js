
const express = require('express');
const router = express.Router();

global.reviews = [];

router.post('/', (req,res) => {
    let user = users.find(u => u.name===req.body.name);
    if(!user) {
        res.status(400).send("User not found.");
        return;
    }
    let movie = movies.find(m => m.title===req.body.title);
    if(!movie) {
        res.status(400).send("This movie does not exist.");
        return;
    }
    const currentYear = new Date().getFullYear();
    if(movie.year>=currentYear) {
        res.status(400).send("Movie yet to be released.");
        return;
    }
    const duplicate = movie.reviews.find(review => review.name == req.body.name);
    if(duplicate) {
        res.status(400).send("Multiple reviews not allowed.");
        return;
    }
    var rating = req.body.rating;
    if(rating<0 || rating>10){
        res.status(400).send("Invalid Rating.");
        return;
    }
    if(user.status == "Critic") rating*=2;
    let review = {
        name: req.body.name,
        rating: rating,
        category: user.status
    };
    if(++user.movies_reviewed>=3) user.status = "Critic";
    movie.reviews.push(review);
    res.send(review);
});

router.get('/year/:year', (req,res)=>{
    var count=0;
    var total=0;
    let filtered_movies = movies.filter(movie => movie.year == req.params.year);
    filtered_movies.forEach(m => m.reviews.forEach(r => {
        total+=r.rating;
        count++;
    }));
    res.send({Avg_rating: (total/count).toFixed(1)});
});

router.get('/movie/:title', (req,res) => {
    var total=0;
    let movie = movies.find(movie => movie.title.toUpperCase() == req.params.title.toUpperCase());
    movie.reviews.forEach(r => {
        total+=r.rating;
    });
    var count = movie.reviews.length;
    res.send({Avg_rating: (total/count).toFixed(1)});
});

router.get('/topRated/:n/:genre', (req,res) => {
    let movieByGenre = movies.filter(movie => typeof movie.genres === 'string' ? movie.genres.toUpperCase() == req.params.genre.toUpperCase() : movie.genres.indexOf(req.params.genre) > -1);
    if (movieByGenre.length) {
        let newArray = [];
        movieByGenre.forEach((movie) => {
            if (movie.reviews.length) {
                let reviewByCritics = movie.reviews.filter((review) => review.category === 'Critic');
                if (reviewByCritics.length) {
                    let totalReview = 0;
                    reviewByCritics.forEach((item) => totalReview += item.rating);
                    newArray.push({
                        movie: movie.title,
                        totalReview,
                    });
                }
            }
        });
        
        if (newArray.length) {
            newArray.sort((value1, value2) => {
                return value2.totalReview - value1.totalReview;
            });
            if (req.params.n < newArray.length) {
            newArray = newArray.slice(0, req.params.n);
            }
            res.send(newArray);
            return;
        }
        res.send([]);
        return;
    }
    res.send([]);
});

module.exports = router;