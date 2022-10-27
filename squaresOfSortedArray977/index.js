
// @param {number[]} nums
// @return {number[]

var sortedSquares = (nums)=> nums.map(x=> x * x).sort((a,b)=> a-b)


console.log(sortedSquares([-7,-3,2,3,11]))



// Runtime: 153 ms, faster than 77.41% of JavaScript online submissions for Squares of a Sorted Array.
// Memory Usage: 48.4 MB, less than 76.31% of JavaScript online submissions for Squares of a Sorted Array.