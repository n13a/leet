/* Maximum Average Subarray I
https://leetcode.com/problems/maximum-average-subarray-i/


You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average
value and return this value. Any answer with a calculation error less than 10**-5
will be accepted.


Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000

Constraints:

n == nums.length
1 <= k <= n <= 10**5
-10**4 <= nums[i] <= 10**4
*/


function findMaxAverage(nums, k) {
    let maxAve = Number.MIN_SAFE_INTEGER
    let sum = nums.slice(0, k).reduce((a, c) => a + c, 0)
    let currAve = maxAve = sum / k

    for (let i = k; i < nums.length; ++i) {
        sum += nums[i] - nums[i - k];
        currAve = sum / k;
        maxAve = Math.max(currAve, maxAve)
    }

    return maxAve
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4), 12.75000);
console.log(findMaxAverage([5], 1), 5.00000);
console.log(findMaxAverage([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4), 8.5);
console.log(findMaxAverage([1], 1), 1);
console.log(findMaxAverage([1, 5, 8, 0, 5, 3, 1, -7, 117], 3), 37);
