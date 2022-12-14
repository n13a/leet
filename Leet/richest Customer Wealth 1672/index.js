/*
 @param {number[][]} accounts
@return {number}
*/
const maximumWealth = accounts => {
    let mW = 0
    for(let i = 0; i < accounts.length; i++){
        let account = accounts[i]
        let cW = 0
        for(let j = 0; j < account.length; j++){
            cW += account[j]
        }
        mW = Math.max(cW, mW)
    }
    return mW
};

console.log(maximumWealth([[1, 5], [7, 3], [3, 5]])) 


// Runtime: 66 ms, faster than 90.95% of JavaScript online submissions for Richest Customer Wealth.
// Memory Usage: 41 MB, less than 99.93% of JavaScript online submissions for Richest Customer Wealth.