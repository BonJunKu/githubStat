# 561. Array Partition

## Description

Given an integer array `nums` of `2n` integers, group these integers into `n` pairs `(a1, b1), (a2, b2), ..., (an, bn)` such that the sum of `min(ai, bi)` for all `i` is **maximized**. Return _the maximized sum_.

[You can read the full description here.](https://leetcode.com/problems/array-partition/description/)

## Solution

```python
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        return sum(nums[::2])
```

### Note

1. To keep large numbers from the min function, you should make pairs with similar values. So sort is necessary.
2. `.sort()` is faster than `sorted()`

## Time Complexity

- O(N log N) (N : number of integers)
