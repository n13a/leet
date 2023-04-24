/**
 * @param {Function[]} functions
 * @return {Function}
 */
type Fn = (accum: number, curr: number) => number

function reduce(nums: number[], fn: Fn, init: number): number {
    let initial = init
    nums.forEach(x => initial = fn(initial, x))
    return initial
};