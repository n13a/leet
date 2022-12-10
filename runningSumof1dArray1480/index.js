/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = nums => nums.filter(x => nums.indexOf(x) == nums.lastIndexOf(x))[0]