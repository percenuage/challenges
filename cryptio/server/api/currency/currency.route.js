'use strict';

const Router = require('express').Router();
const CurrencyService = require('./currency.service');

Router.route('/')
    .get(async (req, res) => res.sendStatus(418));

Router.route('/latest')
    .get(async (req, res, next) => {
        try {
            let result = await CurrencyService.compute(req.query);
            res.json(result);
        } catch (err) {
            next(err);
        }
    });

Router.route('/:date')
    .get(async (req, res, next) => {
        try {
            let result = await CurrencyService.compute({...req.query, date: req.params.date});
            res.json(result);
        } catch (err) {
            next(err);
        }
    });

module.exports = Router;