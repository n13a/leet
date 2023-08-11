/* 
ransome note
https://leetcode.com/problems/ransom-note/

Given two strings ransomNote and magazine, return true if ransomNote can be
constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true

Constraints:

    1 <= ransomNote.length, magazine.length <= 105
    ransomNote and magazine consist of lowercase English letters.

*/
function canConstruct(ransomNote: string, magazine: string): boolean {
    if(magazine.length < ransomNote.length) return false

    const f = new Map<string, number>()

    for(const c of magazine) {
        const num = f.get(c) ?? 0
        f.set(c, num + 1)
    }
    for(const c of ransomNote){
        const num = f.get(c) ?? 0

        if(num == 0){
            return false
        }

        f.set(c, num - 1)
    }
    return true
};
