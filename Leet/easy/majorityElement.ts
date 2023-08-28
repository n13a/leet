/* Majority Element
https://leetcode.com/problems/majority-element/description/

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3

Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2

 

Constraints:

    n == nums.length
    1 <= n <= 5 * 104
    -109 <= nums[i] <= 109

 
Follow-up: Could you solve the problem in linear time and in O(1) space? */


function majorityElement(nums: number[]): number {
    let majority = nums[0]
    let majorityCount = 0
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === majority) {
            majorityCount++
        } else if (majorityCount === 0) {
            majority = nums[i]
            majorityCount++
        } else {
            majorityCount--
        }
    }

    return majority

};


/* Runtime
48ms
Beats 98.88% of users with TypeScript

Memory
44.96MB
Beats 94.64%of users with TypeScript */
