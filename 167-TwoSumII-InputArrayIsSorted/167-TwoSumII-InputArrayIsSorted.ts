// Last updated: 2026/5/7 下午2:57:24
1function twoSum(numbers: number[], target: number): number[] {
2    let left = 0,right = numbers.length-1
3    while(left<right){
4        let sum = numbers[left]+numbers[right]
5        if(sum<target){
6            left++
7        }
8        if(sum>target){
9            right--
10        }
11        if(sum===target){
12            return [left+1,right+1]
13        }
14    }
15};