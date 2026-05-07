// Last updated: 2026/5/7 下午1:42:18
1function removeElement(nums: number[], val: number): number {
2    let slow = 0 , fast = 0 
3    while (fast<nums.length){
4        if(nums[fast]!==val){
5            nums[slow]=nums[fast]
6            slow++
7        }
8            fast++
9    }
10    return slow
11};