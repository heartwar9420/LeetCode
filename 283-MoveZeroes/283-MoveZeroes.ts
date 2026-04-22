// Last updated: 2026/4/22 上午11:11:09
1/**
2 Do not return anything, modify nums in-place instead.
3 */
4function moveZeroes(nums: number[]): void {
5    let slow = 0
6    for (let i = 0 ; i < nums.length ; i++){
7        if(nums[i]!==0){
8            let temp = nums[slow]
9            nums[slow] = nums[i]
10            nums[i] = temp
11            slow ++
12        }
13    }
14};