// Last updated: 2026/5/10 上午9:46:51
1function twoSum(nums: number[], target: number): number[] {
2    let map = new Map()
3    for(let i = 0;i<nums.length;i++){
4        let complete = target - nums[i]
5        if(map.has(complete)){
6            return[map.get(complete),i]
7        }
8        map.set(nums[i],i)
9    }
10    return null
11};