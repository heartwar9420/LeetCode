// Last updated: 2026/5/7 下午2:33:53
1function removeDuplicates(nums: number[]): number {
2    let slow = 0
3    for (let fast = 0 ; fast<nums.length; fast++){
4        if(nums[slow]!==nums[fast]){
5            slow++ 
6            nums[slow] = nums[fast]
7        }
8    }
9    return slow+1
10};