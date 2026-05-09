// Last updated: 2026/5/9 下午5:30:04
1function maxArea(height: number[]): number {
2    let left = 0 , right = height.length-1 , res = 0
3    while(left<right){
4        let curArea = (Math.min(height[left],height[right]))*(right-left)
5        res = Math.max(res,curArea)
6        if(height[left]<height[right]){
7            left++
8        }else{
9            right--
10        }
11    }
12    return res
13};