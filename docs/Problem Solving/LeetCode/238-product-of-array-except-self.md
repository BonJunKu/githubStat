# 238. Product of Array Except Self

## Description

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

[You can read the full description here.](https://leetcode.com/problems/product-of-array-except-self/description/)

## Solution

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        accum_left = nums[::]
        accum_right = nums[::]
        ans = []

        for i in range(n):
            if i != 0 :
                accum_left[i] *= accum_left[i - 1]
                accum_right[n - i - 1] *= accum_right[n - i]

        for i in range(n):
            if i == 0 :
                ans.append(accum_right[i + 1])
            elif i == n - 1 :
                ans.append(accum_left[i - 1])
            else:
                ans.append(accum_left[i - 1] * accum_right[i + 1])

        return ans
```

### Note

1. It is impossible to solve this problem with getting whole product and deviding by each element. You can't devide by zero.
2. To get answer in O(N), you need to get multiplied value in O(1).
3. So, getting accumulated product is necessary.
4. You can accumulate each elements from both sides, right and left.
5. After handling exception, you can get answer easily.

## Time Complexity

- O(N) (length of `nums`)
