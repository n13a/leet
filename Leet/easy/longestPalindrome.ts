/* Longest Palindrome
https://leetcode.com/problems/longest-palindrome/


Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.

Example 2:

Input: s = "a"
Output: 1
Explanation: The longest palindrome that can be built is "a", whose length is 1.

 

Constraints:

    1 <= s.length <= 2000
    s consists of lowercase and/or uppercase English letters only.
*/

function longestPalindrome(s: string): number {
    const f = new Map<string, number>();
    for(const char of s){
        f.set(char, (f.get(char) ?? 0) + 1)
    }
    let odd = 0
    for(const v of f.values()){
        if(v % 2 !== 0){
            odd += 1
        }
    }
    if(odd >= 1){
        return s.length - odd + 1
    }

    return s.length
};
