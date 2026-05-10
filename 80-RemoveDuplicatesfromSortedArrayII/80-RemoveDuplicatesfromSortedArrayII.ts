// Last updated: 2026/5/10 上午11:47:48
1function removeDuplicates(nums: number[]): number {
2    let slow = 2
3    for (let fast = 2 ; fast<nums.length ; fast++){
4        if(nums[fast]!== nums[slow-2]){
5            nums[slow]=nums[fast]
6            slow ++
7        }
8    }
9    return slow
10
11};