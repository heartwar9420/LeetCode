// Last updated: 2026/5/7 下午5:08:36
1function findDuplicate(nums: number[]): number {
2    let slow = nums[0]
3    let fast = nums[nums[0]]
4    if(slow === fast) return slow
5    while(fast!==slow){
6        slow = nums[slow]
7        fast = nums[nums[fast]]
8        if(fast ===slow){
9            break
10        }
11    }
12    slow = 0
13    while(fast!==slow){
14        slow = nums[slow]
15        fast = nums[fast]
16    }
17    return slow
18};