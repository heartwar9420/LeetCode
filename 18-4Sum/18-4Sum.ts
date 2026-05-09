// Last updated: 2026/5/9 下午4:28:46
1function fourSum(nums: number[], target: number): number[][] {
2    nums.sort((a,b)=>a-b)
3    const kSum = (start:number,k:number,target:number):number[][]=>{
4        const res :number[][] = []
5        const n = nums.length;
6
7        if (start === n) return res;
8
9        if(k === 2){
10            let lo = start,hi =n-1
11            while (lo<hi){
12                const sum = nums[lo]+nums[hi]
13                if(sum<target){
14                    lo++
15                }else if (sum>target){
16                    hi--
17                }else{
18                    res.push([nums[lo],nums[hi]])
19                    while (lo<hi && nums[lo]===nums[lo+1]) lo++
20                    while (lo<hi && nums[hi]===nums[hi-1]) hi--
21                    lo++
22                    hi--
23                }
24            }
25            return res
26        }
27        for (let i = start ; i<n -(k-1);i++){
28            if(i>start && nums[i]=== nums[i-1]) continue;
29            const subsets = kSum(i+1,k-1,target-nums[i]);
30            for(const subset of subsets){
31                res.push([nums[i],...subset]);
32            }
33        }
34        return res
35    }
36    return kSum(0,4,target)
37};