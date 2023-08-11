/* A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and
   removing all non-alphanumeric characters, it reads the same forward and backward.
   Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise. */
/* Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome. */


function isPalindrome(s){
    let left = 0,
        right = s.length - 1
    s = s.toLowerCase()
    while (left <= right) {
        const cl = s[left], cr = s[right]

        if (!/[a-z0-9]/i.test(cl)) {
            left++
            continue
        }
        if (!/[a-z0-9]/i.test(cr)) {
            right--
            continue
        }

        if (cl !== cr) return false
        left++
        right--
    }
    return true
}

