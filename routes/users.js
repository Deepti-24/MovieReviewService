
const express = require('express');
const router = express.Router();

global.users = [];

router.get('/', (req,res) => {
    res.send(users);
});

router.post('/', (req,res) => {
    let user = {
        name: req.body.name,
        status: 'Viewer',
        movies_reviewed: 0
    };
    users.push(user);
    res.send(user);
});

module.exports = router;