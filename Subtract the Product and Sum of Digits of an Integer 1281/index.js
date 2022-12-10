/**
 * @param {number[]} nums
 * @return {number}
 */

var runningSum = function (nums) {
    let a = []
    for (let i = 1; i <= nums.length; i++) {
        a.push(nums.slice(0, i).reduce((a, c) => a + +c, 0))
    }
    return a
};