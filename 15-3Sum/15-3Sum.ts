// Last updated: 2026/5/9 下午1:56:50
1function threeSum(nums: number[]): number[][] {
2    nums.sort((a,b)=>a-b)
3    const res : number[][] = []
4    for(let i = 0 ; i<nums.length-2;i++){
5        if(i>0 && nums[i]===nums[i-1]) continue
6        let lo = i+1;
7        let hi = nums.length-1  
8        while(lo<hi){
9            let sum = nums[i]+nums[lo]+nums[hi]
10            if(sum < 0){
11                lo++
12            }else if (sum >0){
13                hi--
14            }else{
15                res.push([nums[i],nums[lo],nums[hi]])
16                while(lo<hi && nums[lo]===nums[lo+1]) lo++
17                while(lo<hi && nums[hi]===nums[hi-1]) hi--;
18                lo++
19                hi--
20            }
21        }
22    }
23    return res
24};