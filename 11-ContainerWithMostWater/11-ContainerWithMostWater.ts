// Last updated: 2026/5/10 上午9:39:57
1function maxArea(height: number[]): number {
2    let left = 0
3    let right = height.length-1
4    let res = 0
5    while(left<right){
6        let curArea = Math.min(height[left],height[right]) * (right-left)
7        res = Math.max(res,curArea)
8        if(height[left]<height[right]){
9            left++
10        }else right --
11    }
12    return res
13};