/* Valid Anagram
https://leetcode.com/problems/valid-anagram/


Given two strings s and t, return true if t is an anagram of s, and false
otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different
word or phrase, typically using all the original letters exactly once.


Example 1:

Input: s = "anagram", t = "nagaram"
Output: true

Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
*/


function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false

    const f = new Map<string, number>()

    for (const c of s) {
        const num = f.get(c) ?? 0
        f.set(c, num + 1)
    }
    for (const c of t) {
        const num = f.get(c) ?? 0

        if (num == 0) {
            return false
        }

        f.set(c, num - 1)
    }
    return true
};
