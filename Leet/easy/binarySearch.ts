/* 
Binary Search
Given an array of integers nums which is sorted in ascending order, and an 
integer target, write a function to search target in nums. If target exists,
then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.


Example 1:

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:

Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1


Constraints:

1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.

*/
function search(nums: number[], target: number): number {
    let low = 0, high = nums.length
    do {
        const m = Math.floor(low + (high - low) / 2)
        const cur = nums[m]
        if (cur < target) {
            low = m + 1
            continue
        }
        if (cur > target) {
            high = m
            continue
        }

        return m
    } while (low < high)
    return -1
};

