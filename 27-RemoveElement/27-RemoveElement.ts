// Last updated: 2026/4/22 上午10:36:35
1function removeElement(nums: number[], val: number): number {
2    let slow = 0 , fast = 0
3    for (let i = 0 ; i<nums.length ; i++){
4        if(nums[fast]!==val){
5            nums[slow] = nums[fast]
6            slow++
7        }else{
8            nums[fast]=null
9        }
10        fast++
11    }
12    return slow
13
14};