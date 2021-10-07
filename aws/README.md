# AWS Challenges

## Getting Started
``` bash
$ npm test
```

## Challenges

- [PopularNToys](#popularntoys)
- [CriticalRouters](#criticalrouters)
- [MinimumTime](#minimumtime)
- [OptimalUtilization](#optimalutilization)

## PopularNToys

You work on a team whose job is to understand the most sought after toys for the holiday season. A tearnmate of yours has built a
webcrawler that extracts a list of quotes about toys from different articles. You need to take these quotes and identify which toys are
mentioned most frequently. Write an algorithm that identifies the top N toys out of a list of quotes and list of toys.

Your algorithm should output the top N toys mentioned most frequently in the quotes.

### Input

The input to the function/method consists of five arguments -

numToys, an integer representing the number of toys;

topToys, an integer representing the number of top toys your algorithm needs to return;

toys, a list of strings representing the toys;

numQuotes, an integer representing the number of quotes about toys;

quotes, a list of strings that consist of space-separated words representing articles about toys.

### Output

Return a list of strings of the most popular N toys in order of most to least frequently mentioned.

Note

The comparison of strings is case-insensitive.
Multiple occurrences of a toy in a quote should be considered as a single mention.
If the value of topToys is more than the number of toys, return the names of only the toys mentioned in the quotes.
If toys are mentioned an equal number of times in quotes, sort alphabetically.

### Example

Input:

numToys = 6

topToys = 2

toys = ["elmo’”, “elsa’, “legos”, “drone”, “tablet”, “warcraft"]

numQuotes = 6

quotes= [Elmo is the hottest toy of the season! Elmo will be on every kid's wishlist!”, “The new Elmo dolls are super high quality.”,
“Expect the Elsa dolls to be very popular this year’, “Elsa and Elmo are the toys I'll be buying for my kids.”, “For parents of older kids,
look into buying them a drone.”, “Warcraft is slowly rising in popularity ahead of the holiday season.”]

Output:

["elmo", "elsa"]

Explanation:

“elmo” occurs in three different quotes, “elsa” occurs in two, and “drone” and “warcraft” occur in one quote each.

## CriticalRouters

AWS wants to increase the reliability of their network by upgrading crucial data center routers. Each data center has a single
router that is connected to every other data center either through a direct link or some other data center.

To increase the fault tolerance of the network, AWS wants to identify every router which would result in a disconnected
network if that individual router went down. Those routers will then be upgraded.

Write an algorithm to identify all such routers that need to be connected to the network all the time.

### Input

The input to the function/method consists of three arguments:

numRouters, an integer representing the number of routers in the data center (23),

numLinks, an integer representing the number of links between the pair of routers,

links, a list of pairs of integers - A, B representing a link between the routers A and B. The network will be connected.

### Output

Return a list of integers representing the routers which need to be connected to the network all the time.

### Example

Input:

numRouters = 7

numLinks = 7

links = [[1, 2], [1, 3], [2, 4], [3, 4], [3, 6], [6, 7], [4, 5]]

Output:

[3, 4, 6]

Explanation:

On disconnecting router 3, a packet may be routed either to the routers - 1, 2, 4, 5 or to the routers - 6, 7, but not to all.
On disconnecting router 4, a packet may be routed either to the routers - 1, 2, 3, 6, 7 or to the router - 5, but not to all.
On disconnecting router 6, a packet may be routed either to the routers - 1, 2,3, 4,5 or to the router — 7, but not to all.

## MinimumTime

Amazon Fulfillment Builder is a new feature that enables Amazon warehouses to create
new items to ship to customers out of smaller parts. As part of this project, Amazon wants to
estimate the time it will take for a worker to create the item to be ready for a customer
shipment.

The Amazon Fulfillment Builder will provide an estimate about the time it will take for the
item to be created based on the size of each of the parts. The worker can only combine two
parts at a time. The time required to put two parts together is equal to the sum of the parts
sizes. The size of the newly constructed part is also equal to the sum of the part's sizes. This
process is repeated until all of the parts have been merged together to form the final
product.

Write an algorithm to output the minimum possible time to put the N parts together and
build the final product.

### Input

The input to the function/method consists of two arguments:

- numOfParts, an integer representing the number of the parts;

- parts, a list of integers representing the size of the parts.

### Output

Return an integer representing the minimum time required to assemble all the parts.

### Constraints

2 <= numOfParts <= 10^6

1 <= parts[i] <= 10^6

0 <= i < numOfParts

### Example

Input:

numOfParts = 4

parts = [8, 4, 6, 12]

Output:
58

Explanation:

The optimal way to assemble the parts is as follows:

Step 1: Assemble the parts of size 4 and 6 (time required is 10). Size of remaining parts after
merging: [8, 10, 12].

Step 2: Assemble the parts of size 8 and 10 (time required is 18). Size of remaining parts after
merging: [18, 12].

Step 3: Assemble the parts of size 18 and 12 (time required is 30).

Total time required to assemble the parts is 10 + 18 + 30 = 58.

## OptimalUtilization

Amazon Prime Air is developing a system that divides shipping
routes using flight optimization routing systems to a cluster of
aircrafts that can fulfill these routes. Each shipping route is identified
by a unique integer identifier, requires a fixed non-zero amount of
travel distance between airports, and is defined to be either a
forward shipping route or a return shipping route. Identifiers are
guaranteed to be unique within their own route type, but not across
route types.

Each aircraft should be assigned two shipping routes at once: one
forward route and one return route. Due to the complex scheduling
of flight plans, all aircraft have a fixed maximum operating travel
distance, and cannot be scheduled to fly a shipping route that
requires more travel distance than the prescribed maximum
operating travel distance. The goal of the system is to optimize the
total operating travel distance of a given aircraft. A forward/return
shipping route pair is considered to be "optimal" if there does not
exist another pair that has a higher operating travel distance than
[...]
considered optimal if such a pair did exist.

Your task is to write an algorithm to optimize the sets of
forward/return shipping route pairs that allow the aircraft to be
optimally utilized, given a list of forward shipping routes and a list of
return shipping routes.

### Input

The input to the function/method consists of three arguments:
maxTravelDist, an integer representing the maximum operating
travel distance of the given aircraft;

forwardRouteList, a list of pairs of integers where the first integer
represents the unique identifier of a forward shipping route and the
second integer represents the amount of travel distance required by
this shipping route;

returnRouteList, a list of pairs of integers where the first integer
represents the unique identifier of a return shipping route and the
second integer represents the amount of travel distance required by
this shipping route.

### Output

Return a list of pairs of integers representing the pairs of IDs of forward and return shipping
routes that optimally utilize the given aircraft. If no route is possible, return a list with empty
pair.

### Examples

#### Example 1:

Input:

maxTravelDist = 7000

forwardRouteList = [[1,2000],[2,4000],[3,6000]]

returnRouteList = [[1,2000]]

Output:

[[2,1]]

Explanation:

There are only three combinations, [1,1], [2,1], and [3,1], which have a total of 4000, 6000, and
8000 miles, respectively. Since 6000 is the largest use that does not exceed 7000, [2,1] is the
only optimal pair.

#### Example 2:

Input:

maxTravelDist = 10000

forwardRouteList = [[1, 3000], [2, 5000], [3, 7000], [4, 10000]]

returnRouteList = [[1, 2000], [2, 3000], [3, 4000], [4, 5000]

Output:

[[2, 4], [3, 2]]

### Explanation:

There are two pairs of forward and return shipping routes possible that optimally utilizes the
given aircraft.

Shipping Route ID#2 from the forwardShippingRouteList requires 5000 miles travelled, and
Shipping Route ID#4 from returnShippingRouteList also requires 5OOO miles travelled.
Combined, they add up to 10000 miles travelled.

Similarly, Shipping Route ID#3 from forwardShippingRouteList requires 7000 miles travelled, and Shipping Route ID#2 from returnShippingRouteList requires 3000
miles travelled. These also add up to 10000 miles travelled.

Therefore, the pairs of forward and return shipping routes that optimally utilize the aircraft
are [2, 4] and [3, 2].