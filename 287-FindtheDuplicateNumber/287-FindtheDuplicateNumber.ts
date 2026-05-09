// Last updated: 2026/5/9 上午10:52:50
1function findDuplicate(nums: number[]): number {
2    let slow = 0
3    let fast = 0
4    while(true){
5        slow = nums[slow]
6        fast = nums[nums[fast]]
7        if(slow===fast)break
8    }
9    slow = 0
10    while(slow!==fast){
11        slow = nums[slow]
12        fast = nums[fast]
13    }
14    return slow
15};