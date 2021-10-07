const assert = require('assert');

const {
    minimumTime,
    optimalUtilization,
    popularNToys,
    criticalRouters
} = require('./challenges');

function minimumTimeTest() {
    assert.equal(minimumTime(0, []), 0);
    assert.equal(minimumTime(4, [8, 4, 6, 12]), 58);
    assert.equal(minimumTime(5, [8, 4, 6, 12, 2]), 70);
}

function optimalUtilizationTest() {
    assert.deepEqual(optimalUtilization(10000, [[]], [[]]), []);
    assert.deepEqual(optimalUtilization(7000,
        [[1,2000],[2,4000],[3,6000]],
        [[1,2000]]),
        [[2,1]]);
    assert.deepEqual(optimalUtilization(10000,
        [[1, 3000], [2, 5000], [3, 7000], [4, 10000]],
        [[1, 2000], [2, 3000], [3, 4000], [4, 5000]]),
        [[2, 4], [3, 2]]);
}

function popularNToysTest() {
    assert.deepEqual(popularNToys(6, 2, ["elmo", "elsa", "legos", "drone", "tablet", "warcraft"], 7,
        [
            "Elmo is the hottest toy of the season! Elmo will be on every kid's wishlist!",
            "The new Elmo dolls are super high quality.",
            "Expect the Elsa dolls to be very popular this year",
            "Elsa and Elmo are the toys I'll be buying for my kids.",
            "For parents of older kids",
            "look into buying them a drone.",
            "Warcraft is slowly rising in popularity ahead of the holiday season."
        ]), ["elmo", "elsa"]);

    assert.deepEqual(popularNToys(2, 1, ["super", "superman"], 1,
        [
            "Hello superman"
        ]), ["superman"]);
}

function criticalRoutersTest() {
    assert.deepEqual(criticalRouters(0, 0, []), []);
    assert.deepEqual(criticalRouters(6, 5, [[1, 2], [2, 3], [3, 4], [4, 5], [6, 3]]), [2, 3, 4]);
    assert.deepEqual(criticalRouters(7, 7, [[1, 2], [1, 3], [2, 4], [3, 4], [3, 6], [6, 7], [4, 5]]), [3, 4, 6]);
    assert.deepEqual(criticalRouters(10, 13, [
        [1, 2], [1, 3], [2, 3], [3, 4], [4, 5], [4, 6], [5, 6],
        [5, 7], [6, 7], [7, 8], [8, 9], [8, 10], [9, 10],
    ]), [3, 4, 7, 8]);
}

minimumTimeTest();
optimalUtilizationTest();
popularNToysTest();
criticalRoutersTest();