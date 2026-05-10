// Last updated: 2026/5/10 上午10:45:25
1function fourSum(nums: number[], target: number): number[][] {
2    nums.sort((a,b)=>a-b)
3    const nSum = (nums:number[],n:number,start:number,target:number):number[][]=>{
4        let res = []
5        if (n<2 || nums.length<n) return res
6        if(n===2){
7            let lo = start
8            let hi = nums.length-1
9            while(lo<hi){
10                let sum = nums[lo]+nums[hi]
11                if(sum<target){
12                    lo++
13                }else if (sum>target){
14                    hi--
15                }else{
16                    res.push([nums[lo],nums[hi]])
17                    while(lo<hi && nums[lo]===nums[lo+1])lo++
18                    while(lo>hi && nums[hi]===nums[hi-1])hi--
19                    lo++
20                    hi--
21                }
22            }
23        }else{
24            for (let i=start ; i<nums.length;i++){
25                let subs = nSum(nums,n-1,i+1,target-nums[i]);
26                for (const sub of subs){
27                    res.push([nums[i], ...sub])
28                }
29                while(i<nums.length-1 && nums[i]===nums[i+1])i++
30            }
31        }
32        return res
33    }
34    return nSum(nums,4,0,target)
35};