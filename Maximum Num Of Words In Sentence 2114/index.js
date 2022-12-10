/*
@param {string[]} sentences
@return {number}
*/
const mostWordsFound = sentences => {
    let maxWords = 0
    sentences.forEach(x => {
        let sentence = x
        let currentMax = sentence.split(' ').length
        maxWords = Math.max(currentMax, maxWords)

    })
    return maxWords
};


console.log(mostWordsFound(["please wait", "continue to fight", "continue to win"]), 3)

// Runtime: 91 ms, faster than 73.87% of JavaScript online submissions for Maximum Number of Words Found in Sentences.
// Memory Usage: 44.1 MB, less than 63.68% of JavaScript online submissions for Maximum Number of Words Found in Sentences.