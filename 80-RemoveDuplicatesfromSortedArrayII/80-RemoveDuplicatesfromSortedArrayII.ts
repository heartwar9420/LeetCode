// Last updated: 2026/5/10 上午11:41:20
1function removeDuplicates(nums: number[]): number {
2    let slow =0 , fast = 0 ,count = 0
3    while(fast<nums.length){
4        if(nums[fast]!==nums[slow]){
5            slow++
6            nums[slow]=nums[fast]
7        }else if (slow < fast &&count<2){
8            slow++
9            nums[slow]=nums[fast]
10        }
11        fast++
12        count++
13        if(fast<nums.length &&nums[fast]!==nums[fast-1]){
14            count = 0
15        }
16    }
17    return slow +1
18};