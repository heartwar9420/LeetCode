// Last updated: 2026/5/8 下午5:08:05
1function removeElement(nums: number[], val: number): number {
2    let slow = 0
3    let fast = 0
4    while(fast<nums.length){
5        if(nums[fast]!==val){
6            nums[slow]=nums[fast]
7            slow++
8        }
9        fast++
10    }
11    return slow
12};