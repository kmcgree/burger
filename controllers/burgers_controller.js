const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/', (req, res) => {
    burger.all((data) => {
        let allBurgers = {
            burgers: data
        };
        res.render('index', allBurgers);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insert([req.body.burger_name], (result) => {
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    let { id } = req.params;
    burger.update(id, (result) => {
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

module.exports = router;