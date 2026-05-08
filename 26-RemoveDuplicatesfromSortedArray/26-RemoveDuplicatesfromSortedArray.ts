// Last updated: 2026/5/8 下午4:39:25
1function removeDuplicates(nums: number[]): number {
2    let slow = 0
3    let fast = 0
4    for (let i = 0 ; i < nums.length ; i++){
5        if(nums[slow] !== nums[fast]){
6            slow++
7            nums[slow]=nums[fast]
8        }
9        fast++
10    }
11    return slow+1
12};