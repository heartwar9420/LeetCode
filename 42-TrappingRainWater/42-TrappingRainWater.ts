// Last updated: 2026/5/9 下午5:07:09
1function trap(height: number[]): number {
2    let left = 0 , right = height.length-1
3    let lMax = 0 , rMax = 0
4    let res = 0
5    while (left<right){
6        lMax = Math.max(lMax,height[left]);
7        rMax = Math.max(rMax,height[right]);
8
9        if(lMax<rMax){
10            res += lMax -height[left]
11            left ++
12        }else{
13            res += rMax - height[right]
14            right--
15        }
16    }
17    return res
18};