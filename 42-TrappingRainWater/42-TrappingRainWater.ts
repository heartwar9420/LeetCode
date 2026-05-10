// Last updated: 2026/5/10 上午10:02:38
1function trap(height: number[]): number {
2    let lMax = 0 , rMax = 0 , left = 0 , right = height.length-1 ,res = 0
3    while(left<right){
4        lMax = Math.max(lMax,height[left])
5        rMax = Math.max(rMax,height[right])
6        if(lMax<rMax){
7            res += lMax-height[left]
8            left++
9        }else{
10            res += rMax-height[right]
11            right--
12        }
13    }
14    return res
15};