function popularNToys(numToys, topToys, toys, numQuotes, quotes) {
    const toyCountRef = {};
    quotes.forEach(quote => {
        toys.forEach(toy => {
            const re =  new RegExp(`(?:^|\\W)${toy}(?:$|\\W)`, "gi");
            const isMatched = quote.match(re) != null;
            if (isMatched) {
                toyCountRef[toy] = (toyCountRef[toy] || 0) + 1
            }
        })
    });
    const toyKeys = Object.keys(toyCountRef);
    const sortedToys = toyKeys.sort((a, b) => {
        if (toyCountRef[b] === toyCountRef[a]) {
            if (a > b)
                return 1;
            if (a < b)
                return -1;
            return 0;
        }
        return toyCountRef[b] - toyCountRef[a];

    });
    return sortedToys.slice(0, topToys);
}

function criticalRouters(numRouters, numLinks, links) {
    const routerLinkMap = {};
    const addToMap = (from, to) => {
        if (!routerLinkMap[from]) {
            routerLinkMap[from] = [];
        }
        if (!routerLinkMap[to]) {
            routerLinkMap[to] = [];
        }
        routerLinkMap[from].push(to);
        routerLinkMap[to].push(from);
    };

    links.forEach(([from, to]) => addToMap(from, to));

    const output = [];
    const connectedRouterIds = new Set();
    const recursiveConnectedRouters = (id, disconnectedRouterId) => {
        if (id === disconnectedRouterId || connectedRouterIds.has(id)) {
            return 0;
        }
        connectedRouterIds.add(id);
        const routers = routerLinkMap[id];
        routers.forEach(routerId => recursiveConnectedRouters(routerId, disconnectedRouterId));
    };

    for (let disconnectedRouterId = 1; disconnectedRouterId <= numRouters; disconnectedRouterId++) {
        connectedRouterIds.clear();
        if (disconnectedRouterId === 1) {
            recursiveConnectedRouters(2, disconnectedRouterId);
        } else {
            recursiveConnectedRouters(1, disconnectedRouterId);
        }
        if (connectedRouterIds.size < numRouters - 1) {
            output.push(disconnectedRouterId)
        }
    }
    return output;
}

function minimumTime(numOfParts, parts) {
    let total = 0;
    const list = parts.slice(0);
    while (list.length > 1) {
        list.sort((a, b) => a - b);
        const sum = list.shift() + list.shift();
        list.push(sum);
        total += sum;
    }
    return total;
}

function optimalUtilization(maxTravelDist, forwardRouteList, returnRouteList) {
    let optimizedRouteIds = [];
    let optimizedRouteDist = 0;
    forwardRouteList.forEach(([ forwardId, forwardDist ]) => {
        returnRouteList.forEach(([ returnId, returnDist ]) => {
            const pair = [ forwardId, returnId ];
            const dist = forwardDist + returnDist;
            if (dist === optimizedRouteDist) {
                optimizedRouteIds.push(pair);
            } else if (dist <= maxTravelDist && dist > optimizedRouteDist) {
                optimizedRouteIds = [pair];
                optimizedRouteDist = dist;
            }
        })
    });
    return optimizedRouteIds;
}

module.exports = {
    popularNToys,
    criticalRouters,
    minimumTime,
    optimalUtilization
};