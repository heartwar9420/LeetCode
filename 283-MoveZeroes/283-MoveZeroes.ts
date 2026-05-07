// Last updated: 2026/5/7 下午2:12:09
1/**
2 Do not return anything, modify nums in-place instead.
3 */
4function moveZeroes(nums: number[]): void {
5    let slow = 0 
6    for (let fast = 0;fast<nums.length;fast++){
7        if(nums[fast]!==0){
8            [nums[slow], nums[fast]] = [nums[fast], nums[slow]];
9            slow ++
10        }
11    }
12};