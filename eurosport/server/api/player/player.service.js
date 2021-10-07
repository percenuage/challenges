'use strict';

const DB = require('../../db');

class PlayerService {
    static getAll() {
        return DB.players.sort((a, b) => a.id - b.id);
    }

    static getById(id) {
        return DB.players.find(e => e.id == id);
    }

    static deleteById(id) {
        const index = DB.players.findIndex(e => e.id == id);
        if (index === -1) return null;
        return DB.players.splice(index, 1)[0];
    }
}

module.exports = PlayerService;