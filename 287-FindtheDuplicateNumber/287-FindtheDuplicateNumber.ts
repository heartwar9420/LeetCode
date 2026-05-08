// Last updated: 2026/5/8 下午5:29:07
1function findDuplicate(nums: number[]): number {
2    let slow = 0 , fast = 0
3    while(true){
4        fast = nums[nums[fast]]
5        slow = nums[slow]
6        if(slow===fast) break
7    }
8    slow = 0
9    while(slow!==fast){
10        fast = nums[fast]
11        slow = nums[slow]
12    }
13    return slow
14};