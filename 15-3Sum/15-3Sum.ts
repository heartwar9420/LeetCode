// Last updated: 2026/5/9 下午1:56:23
1function threeSum(nums: number[]): number[][] {
2    nums.sort((a,b)=>a-b)
3    const res : number[][] = []
4    for(let i = 0 ; i<nums.length-2;i++){
5        if (nums[i]>0) break
6        if(i>0 && nums[i]===nums[i-1]) continue
7        let lo = i+1;
8        let hi = nums.length-1  
9        while(lo<hi){
10            let sum = nums[i]+nums[lo]+nums[hi]
11            if(sum < 0){
12                lo++
13            }else if (sum >0){
14                hi--
15            }else{
16                res.push([nums[i],nums[lo],nums[hi]])
17                while(lo<hi && nums[lo]===nums[lo+1]) lo++
18                while(lo<hi && nums[hi]===nums[hi-1]) hi--;
19                lo++
20                hi--
21            }
22        }
23    }
24    return res
25};