// Last updated: 2026/4/22 上午10:07:08
1function removeDuplicates(nums: number[]): number {
2    if (nums.length === 0) return 0
3    let slow = 0
4    let fast = 0
5    while (fast<nums.length){
6        if(nums[fast]!==nums[slow]){
7        slow++
8        nums[slow] = nums[fast]
9        }
10        fast ++
11    }
12    return slow + 1
13};