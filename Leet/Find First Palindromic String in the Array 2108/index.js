/**
 * @param {string[]} words
 * @return {string}
 */
const firstPalindrome = words => words.find(x => x.split('').reverse().join('') == x) || ''