# 125. Valid Palindrome

## Description

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

[You can read the full description here.](https://leetcode.com/problems/valid-palindrome/description/)

## Solution

```python
class Solution:
    def isPalindrome(self, s: str) -> bool:
        res = []
        # O(N)
        for letter in s:
            if (letter.isalnum()):
                res.append(letter.lower())

        # Slicing is O(1), list comparision is O(N)
        return res == res[::-1]
```

### Note

1. Filter characters. Remove characters except for alphabets or numbers.
   1. `re.sub` is a good choice.
2. Compare strings or lists.

## Time Complexity

- O(N) (N : number of characters in sentence `s`)
