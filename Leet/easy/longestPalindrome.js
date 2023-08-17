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
function longestPalindrome(s) {
    var _a;
    var frequency = new Map();
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var char = s_1[_i];
        frequency.set(char, ((_a = frequency.get(char)) !== null && _a !== void 0 ? _a : 0) + 1);
    }
    console.log(frequency);
    var odd = 0;
    for (var _b = 0, _c = frequency.values(); _b < _c.length; _b++) {
        var v = _c[_b];
        console.log(v);
        if (v % 2 !== 0) {
            odd += 1;
        }
    }
    return odd;
}
longestPalindrome('aaaabc');
