// Last updated: 2026/5/10 上午10:15:54
1function threeSum(nums: number[]): number[][] {
2    nums.sort((a,b)=>a-b)
3    let res :number[][] = []
4    for (let i = 0 ; i < nums.length-2 ; i++){
5        if( i>0 && nums[i]===nums[i-1]) continue
6        let lo = i+1
7        let hi = nums.length-1
8        while(lo<hi){
9            let target = nums[i]+nums[lo]+nums[hi]
10            if(target===0){
11                res.push([nums[i],nums[lo],nums[hi]])
12                while(lo<hi && nums[lo]===nums[lo+1]) lo++
13                while(lo<hi && nums[hi]===nums[hi-1]) hi--
14                lo++
15                hi--
16            } else if (target<0){
17                lo++
18            }else {
19            hi--
20            }
21        }
22    }
23    return res
24};