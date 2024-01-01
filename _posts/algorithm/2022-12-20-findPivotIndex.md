---
title: "LeetCode724. Find Pivot Index"
excerpt: "으아닛!! copilot이 틀리는 문제도 있네? 그래서 chat gpt 에게 물어봤다"
search: true
categories:
- algorithm
last_modified_at: 2022-12-20T08:06:00-05:00
---
- **724. Find Pivot Index**
    
    [Find Pivot Index - LeetCode](https://leetcode.com/problems/find-pivot-index/description/?envType=study-plan&id=level-1)
    
    예시 
    
    ```python
    Example 1:
    
    Input: nums = [1,7,3,6,5,6]
    Output: 3
    Explanation:
    The pivot index is 3.
    Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
    Right sum = nums[4] + nums[5] = 5 + 6 = 11
    Example 2:
    
    Input: nums = [1,2,3]
    Output: -1
    Explanation:
    There is no index that satisfies the conditions in the problem statement.
    Example 3:
    
    Input: nums = [2,1,-1]
    Output: 0
    Explanation:
    The pivot index is 0.
    Left sum = 0 (no elements to the left of index 0)
    Right sum = nums[1] + nums[2] = 1 + -1 = 0
    ```
    
    For문을 사용해서 읽기 좋게 만들고 싶었음 while보다는 아직까지 For문이 편한것 같아... (이 문제 예전에 풀었는데 금방 다 까먹음…🦅🦅🦅🦅)
    
    코드가 깔끔했으면 좋겠다고 생각했고 잡스러운게 없으면 좋겠다 생각
    
    > 아이디어는 왼쪽 합과 오른쪽 합을 나누고 오른쪽 합을 다 더한다음 왼쪽 함에 값을 빼가면서 문제를 해결하면 될 것으로 생각
    
    ```python
    class Solution:
        def pivotIndex(self, nums: List[int]) -> int:
            left_sum = 0
            right_sum = 0
            for num in nums:
                right_sum += num
            
            for i in range(0, len(nums)):
                if i <= len(nums):
                    right_sum = right_sum - nums[i]
                    if left_sum == right_sum:
                        return i
                    left_sum += nums[i]
            return -1
    ```
    
    근데 속도가 생각보다 느렸다. 왜지? 2(n)이면 괜찮은거 같은데?
    
    Copliot은 어떻게 푸는지 봤더니 
    
    ```python
    class Solution:
        def pivotIndex(self, nums: List[int]) -> int:
            if not nums:
                return -1
            if len(nums) == 1:
                return 0
            if len(nums) == 2:
                return -1
            left = 0
            right = sum(nums[1:])
            for i in range(1, len(nums) - 1):
                if left == right:
                    return i
                left += nums[i - 1]
                right -= nums[i]
            if left == right:
                return len(nums) - 1
            return -1
    ```
    
    ```python
    right = sum(nums[1:]) 이부분이 괜찮은 듯
    ```
    
    근데 돌려보니 오답이 나온다!!!! **어이 copilot 너 제대로 안할래??**
    
    그래서 주석을 좀 써줘봤다
    
    ```python
    class Solution:
        def pivotIndex(self, nums: List[int]) -> int:
            """
            :param nums: [1, 7, 3, 6, 5, 6]
            :return: 3
            """
            if not nums:
                return -1
            if len(nums) == 1:
                return 0
            if len(nums) == 2:
                return -1
            for i in range(len(nums)):
                if sum(nums[:i]) == sum(nums[i + 1:]):
                    return i
            return -1
    ```
    
    이렇게 푸네?? 이것의 속도는…
    
    $$
    N^2
    $$
    
    이건 N2이야!!
    
    ***아직은 인간이 좀더 나은걸로…***
    copilot이 만능은 아니다.
    ~~사실 위에 코드를 조금만 고쳐쓰면 훌륭한 코드이긴 하다~~
    
    그래서 chatGPT에게 풀어보라고 했더니 결과는 아래와 같다
    ---
    ![](https://velog.velcdn.com/images/landr/post/6e0f0740-6501-470c-b535-60aad9d98f01/image.png)

  ![](https://velog.velcdn.com/images/landr/post/11d482a7-1881-45f0-87a9-a7479813f4ec/image.png)
    
    훨씬 정확하게 잘 풀었다!!!!
    이정도로 AI가 발전하다니 
   
    나 보다 나은거 같은데??🐣
    
    근데 설명을 계속 쳐다보니 좀 이상하다
    ```text
    At index3: left sum = 11 + 6 = 17, right_sum = 16-6 = 10
    ```
    근데 답은 3이네??
    음... 아직 문장에 대해 훈련이 좀 덜되어 있네
    분명히 leetcode 보고 학습했을텐데??
    설명이 좀 이상하다 
    코드는 이상하지 않은데 설명이 이상함
    그래서 3번째 인덱스가 잘못됐다고 계속 이야기했는데
    ```text
    At index 3: left sum = 11, right sum = 16
    ```
    이렇게 답변하더라
    결국 똑같은 것의 반복이다. 
    
    AI도 설명쪽 부분은 학습에 의한 부분이라 잘못된 학습을 하면 잘못된 답이 나올 수도 있다는 걸 보여준다. 
    
    무튼!!! 아주 정확하게는 안되더라
    
    개발자들은 훈련은 계속하되 이제 여러 도구들을 잘 사용하면 코딩하는 시간이 훨씬 줄어들지도 모르겠다.!!
    변화는 적응하는게 좋다 
    > 개발자들도 이제 이런 변화를 배척하지 말고 잘 활용해서 퍼포먼스를 냈으면 좋겠다!!