'use strict';

const PlayerService = require('./player.service');

describe('Player Service', () => {

    /*describe('GetAll', () => {

        const players = PlayerService.getAll();

        test('Must be an array ordered by id', () => {
            expect(players.map(e => e.id)).toEqual([17, 52, 65])
        });

    });

    describe('GetById', () => {

        const existed_player = PlayerService.getById(17);
        const null_player = PlayerService.getById(0);

        test('Must be an object with id 17', () => {
            expect(existed_player).toBeInstanceOf(Object);
            expect(existed_player.id).toBe(17);
        });

        test('Must return undefined if not existed', () => {
            expect(null_player).toBeUndefined();
        });

    });*/

    describe('DeleteById', () => {

        const removed_player = PlayerService.deleteById(17);
        const null_player = PlayerService.deleteById(0);
        const players = PlayerService.getAll();

        test('Must be an object with id 17', () => {
            expect(removed_player).toBeInstanceOf(Object);
            expect(removed_player.id).toBe(17);
        });

        test('Must be an array without id 17', () => {
            expect(players.map(e => e.id)).toEqual([52, 65])
        });

        test('Must return null if not existed', () => {
            expect(null_player).toBeNull();
        });

    });

});
