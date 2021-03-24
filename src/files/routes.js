const express = require('express');

const routes = express.Router({
    mergeParams: true
});

routes.post('/', (req, res) => {
    res.status(200).json({message:'got request'});
});

module.exports = {
    routes,
};