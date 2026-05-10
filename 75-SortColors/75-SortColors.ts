// Last updated: 2026/5/10 下午2:12:12
1/**
2 Do not return anything, modify nums in-place instead.
3 */
4function sortColors(nums: number[]): void {
5    let p0 = 0,p2 = nums.length-1 , cur = 0
6    while(cur<=p2){
7        if(nums[cur]===0){
8            [nums[cur],nums[p0]]=[nums[p0],nums[cur]]
9            p0++
10            cur++
11        }else if(nums[cur]===2){
12            [nums[cur],nums[p2]]=[nums[p2],nums[cur]]
13            p2--
14        }else if(nums[cur]===1){
15            cur++
16        }
17    }
18};