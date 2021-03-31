const express = require('express');
const app = express();
const usersRoute = require('./routes/users');
const moviesRoute = require('./routes/movies');
const reviewsRoute = require('./routes/reviews');

app.use(express.json());

app.use('/api/users', usersRoute);
app.use('/api/movies', moviesRoute);
app.use('/api/reviews', reviewsRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on port ${port}...`);
});

module.exports = app;
