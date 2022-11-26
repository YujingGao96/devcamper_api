const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    const resJson = {success: true, msg: 'Show all bootcamps'};
    res.status(200).json(resJson);
});

router.get('/:id', (req, res) => {
    const resJson = {success: true, msg: `Get bootcamp with id ${req.params.id}`};
    res.status(200).json(resJson);
});

router.post('/', (req, res) => {
    const resJson = {success: true, msg: 'Created new bootcamps'};
    res.status(201).json(resJson);
});

router.put('/:id', (req, res) => {
    const resJson = {success: true, msg: `Update bootcamp with id ${req.params.id}`};
    res.status(200).json(resJson);
});

router.delete('/:id', (req, res) => {
    const resJson = {success: true, msg: `Delete bootcamp with id ${req.params.id}`};
    res.status(200).json(resJson);
});

module.exports = router;