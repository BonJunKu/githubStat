# 561. Array Partition

## Description

Given an integer array `nums` of `2n` integers, group these integers into `n` pairs `(a1, b1), (a2, b2), ..., (an, bn)` such that the sum of `min(ai, bi)` for all `i` is **maximized**. Return _the maximized sum_.

:::info
You can read the full description [**here**](https://leetcode.com/problems/array-partition/description/).
:::

## Solution 1

### Approach

1. To keep large numbers from the min function, you should make pairs with similar values. So sort is necessary.
2. `.sort()` is faster than `sorted()`

### Implementation

```python
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        return sum(nums[::2])
```

### Complexity Analysis

- n : number of integers
- Time Complexity : $O(n \log n)$
  - sort : $O(n \log n)$
  - slicing : $O(1)$
- Space Complexity : $O(n)$

---

## Solutions from the Book

:::info
The original source of codes below is [**here**](https://github.com/onlybooks/algorithm-interview).
:::

## Solution 2

### Approach: Sort in ascending order

1. Append numbers in an array and **sort** them.
2. Traverse the array and put the numbers in a temporary array.
3. When the length of the temporary array is 2, add the minimum value to total sum.

### Implementation

```python
from typing import List

class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        sum = 0
        pair = []
        nums.sort()

        for n in nums:
            pair.append(n)
            if len(pair) == 2:
                sum += min(pair)
                pair = []
        return
```

## Solution 3

### Approach: Calculate with nth numbers (n : even)

1. Almost same with `Approach 1`.
2. Traverse the array with `enumerate`, and check whether index is even or not.

### Implementation

```python
from typing import List

class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        sum = 0
        nums.sort()

        for i, n in enumerate(nums):
            if i % 2 == 0:
                sum += n

        return sum
```

## Solution 4

### Approach: Phythonic solution with slicing

1. With slicing, the implementation code becomes very simple.
2. Also, it's the **fastest** way!

### Implementation

```python
from typing import List

class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        return sum(sorted(nums)[::2])
```
