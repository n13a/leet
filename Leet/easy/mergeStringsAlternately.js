/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
const mergeAlternately = function (word1, word2) {
    const longest = word1.length > word2.length ? word1 : word2
    let str = ''
    for (let i = 0; i < longest.length; ++i) {
        if (!word1[i] || !word2[i]) {
            str += longest[i]
        } else {
            str += word1[i]
            str += word2[i]

        }
    }
    return str
};
