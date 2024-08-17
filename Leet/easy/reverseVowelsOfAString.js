/* Reverse Vowels of a String
https://leetcode.com/problems/reverse-vowels-of-a-string

Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede" */



function reverseVowels(s) {
    if (s.length === 1) {
        return s;
    }

    const arr = Array.from(s);
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let i = 0, j = s.length - 1;

    while (i < j) {
        while (i < j && !vowels.has(s[i])) {
            i++;
        }
        while (i < j && !vowels.has(s[j])) {
            j--;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        j--;
    }
    return arr.join('');
};
