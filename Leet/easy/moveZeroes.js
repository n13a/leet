/* Move Zeroes
https://leetcode.com/problems/move-zeroes/


Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 10**4
-2**31 <= nums[i] <= 2**31 - 1 */



/**
 Do not return anything, modify nums in-place instead.
 */


/**
 * @param {number[]} nums
*/
function moveZeroes(nums) {
    if (nums.length === 0) {
        return;
    }

    let start = 0;
    let zeroes = 0;

    for (let n of nums) {
        if (n !== 0) {
            nums[start++] = n;
        } else {
            zeroes++;
        }
    }

    if (zeroes === 0) {
        return;
    }

    for (let i = nums.length - zeroes; i < nums.length; ++i) {
        nums[i] = 0;
    }
};
