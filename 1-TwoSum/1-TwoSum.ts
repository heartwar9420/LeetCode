// Last updated: 2026/4/21 下午10:03:41
1function twoSum(nums: number[], target: number): number[] {
2    let map = new Map()
3    for (let i = 0 ; i <nums.length ; i ++){
4        let need = target - nums[i]
5        if (map.has(need)){
6            return [map.get(need),i];
7        }
8        map.set(nums[i],i)
9    }
10    return null
11    
12};