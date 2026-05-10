// Last updated: 2026/5/10 下午2:32:10
1function sortedSquares(nums: number[]): number[] {
2    let n = nums.length
3    let left = 0
4    let right = n-1
5    let p = n-1
6    let res :number[] = []
7    while(left<=right){
8        if(Math.abs(nums[left])>Math.abs(nums[right])){
9            res[p] = nums[left]*nums[left]
10            left++
11        }else{
12            res[p] = nums[right]*nums[right]
13            right--
14        }
15        p--
16    }
17    return res
18};