// Last updated: 2026/5/9 上午10:42:55
1function removeElement(nums: number[], val: number): number {
2    let slow = 0
3    for (let fast = 0 ; fast<nums.length;fast++){
4        if(nums[fast]!==val){
5            nums[slow]=nums[fast]
6            slow++
7        }
8    }
9    return slow
10};