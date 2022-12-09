# 238. Product of Array Except Self

## Description

Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in $O(n)$ time and without using the division operation.

**Follow up**: Can you solve the problem in $O(1)$ extra space complexity? (The output array does not count as extra space for space complexity analysis.)

:::info
You can read the full description [**here**](https://leetcode.com/problems/product-of-array-except-self/description/).
:::

## Solution 1

### Approach

1. To get answer in $O(n)$, you need to get product of the array except self in O(1). Because traversing an array works in $O(n)$.
2. So, getting accumulated product is necessary.
3. However, it is impossible to solve this problem with getting whole product and deviding by each element itself. You can't devide by zero.
4. You can accumulate each elements from both sides, right and left.
5. After handling exception, you can get answer easily.

### Implementation

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

### Complexity Analysis

- n: length of `nums`
- Time Complexity: $O(n)$
- Space Complexity: $O(n)$

## Solution 1+

### Approach

1. To get answer of **follow up** question, you must use only one array: return array.
2. You can assign the product to a variable `accum`, instead of two arrays(`accum_left`, `accum_right`).

### Implementation

```python
class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        n = len(nums)
        ans = [1 for _ in range(n)]
        accum = 1

        for i in range(n):
            ans[i] *= accum
            accum *= nums[i]

        accum = 1

        for i in range(n-1, -1, -1):
            ans[i] *= accum
            accum *= nums[i]

        return ans

```

### Complexity Analysis

- n: length of `nums`
- Time Complexity: $O(n)$
- Space Complexity: $O(1)$ **`improved!`**

---

## Solutions from the Book

:::info
The original source of codes below is [**here**](https://github.com/onlybooks/algorithm-interview).
:::

## Solution 2

### Approach

1. Almost same with `Solution 1+`.

### Implementation

```python
from typing import List

class Solution:
    def productExceptSelf(self, nums: List[int]) -> List[int]:
        out = []
        p = 1

        for i in range(0, len(nums)):
            out.append(p)
            p = p * nums[i]
        p = 1

        for i in range(len(nums) - 1, 0 - 1, -1):
            out[i] = out[i] * p
            p = p * nums[i]
        return out
```
