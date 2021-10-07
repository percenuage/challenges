'use strict';

const Router = require('express').Router();
const PlayerService = require('./player.service');

Router.route('/')
    .get((req, res) => {
        let players = PlayerService.getAll();
        res.json(players);
    });

Router.route('/:id')
    .get((req, res) => {
        let player = PlayerService.getById(req.params.id);
        if (player)
            res.json(player);
        else
            res.sendStatus(404);

    })
    .delete((req, res) => {
        let player = PlayerService.deleteById(req.params.id);
        if (player)
            res.json(player);
        else
            res.sendStatus(404);
    });

module.exports = Router;