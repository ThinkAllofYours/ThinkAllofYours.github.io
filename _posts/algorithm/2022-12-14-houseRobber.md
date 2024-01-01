---
title: "LeetCode198.House Robber (leetcode.com) 문제 해설"
excerpt: "재귀를 사용해서 해결하는 문제"
search: true
categories:
- algorithm
last_modified_at: 2022-12-14T08:06:00-05:00
---
- Q. 집에 보유하고 있는 금액들이 리스트로 주어짐, 도둑이 침입해서 돈을 훔칠 수 있는 최대값을 구해라 단 바로 옆에 있는 집을 털게되면 경찰이 와서 불가능
    
    ```
    Input: nums = [1,2,3,1]
    Output: 4
    
    Input: nums = [2,7,9,3,1]
    Output: 12
    ```
    
    간단하게 생각해서 nums를 홀수 짝수로 list로 돌리면 되지 않을까 생각해서 작성한코드 
    
    ```python
    class Solution:
        def rob(self, nums: List[int]) -> int:
            odd = 0
            even = 0
            for i in range(len(nums)):
                if i % 2 == 0:
                    even += nums[i]
                else:
                    odd += nums[i]
            return odd if odd > even else even
    ```
    
    ```python
    Input: nums = [2,1,1,2]
    expect: 4
    
    but output: 3
    ```
    
    간단한 테스트를 통과하지 못함😿
    
    오.. 생각보다 어려운 문제다…
    
    결국 내가 서있는 결국 **내가 서있는 곳에서 누적적으로 가장 큰 값을** 찾아가면 될 듯 한데
    
    그래서 python에서 제공하는 max를 사용
    🚩해결
    
    ```python
    from typing import List
    
    class Solution:
        def rob(self, nums: List[int]) -> int:
            odd = 0
            even = 0
            for i in range(len(nums)):
                num = nums[i]
                if i % 2 == 0:
                    even = max(even + num, odd)
                else:
                    odd = max(odd + num, even)
            return odd if odd > even else even
    ```
    
    nums에 마이너스가 포함되면 어떨까??? 
    
    ```python
    def test04(self):
            nums = [2, 1, 1, 2, -6, 3, 1, 1, 2]
            ans = 9
            assert self.sl.rob(nums) == ans
    
      def test05(self):
          nums = [2, 1, 1, 2, -6, -9, 12, 22, 2]
          ans = 26
          assert self.sl.rob(nums) == ans
    ```
    
    해서 케이스 문을 좀 만들어봤다 
    
    결국 내가 서있는 자리에서 가장 큰 값을 누적해가면 되는 문제라 이문제도 잘 해결된다. 
    
    내가 서있는 자리가 -6이든 -9이든 가장 큰 값은 4니까 그냥 4가 가장 큰 값이 되는 것