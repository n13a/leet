/**
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = n => {
    const arr = n.toString().split('')
    return arr.reduce((a,c)=> a * c, 1) - arr.reduce((a,c)=> a + +c, 0)
};