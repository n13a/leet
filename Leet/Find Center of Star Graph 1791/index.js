/**
 * @param {number[][]} edges
 * @return {number}
 */

const findCenter = edges => {
    const map = edges.flat().reduce((o, i) => {
        if (!o[i]) o[i] = 0
        o[i]++
        return o
    }, {})
    return Object.keys(map).find(key => map[key] === edges.length)

};