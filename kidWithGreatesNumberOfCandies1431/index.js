var kidsWithCandies = (candies, extraCandies) => {
    let ar = []
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= Math.max(...candies)) {
            ar.push(true)
        } else {
            ar.push(false)
        }
    }
    return ar
}

console.log(kidsWithCandies([4, 2, 1, 1, 2], 1))



// Runtime: 94 ms
// Memory Usage: 42.2 MB