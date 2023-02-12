/**
 * @param {number[]} nums
 * @return {number}
 */


const numIdenticalPairs = (nums) => {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j <= nums.length; j++) {
            console.log(nums[i], nums[j])
            if (nums[j] === undefined) {
                continue
            } else if (nums[i] === nums[j]) {
                count++
            }
        }
    }
    return count
}

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3]))


