// Last updated: 2026/5/6 下午5:36:47
1function twoSum(numbers: number[], target: number): number[] {
2    let left = 0, right = numbers.length-1
3    while(left<right){
4        let sum = numbers[left]+numbers[right]
5        if(sum === target){
6            return [left+1,right+1]
7        }
8        if (sum < target){
9            left++
10        }
11        if(sum >target){
12            right--
13        }
14    }
15    return [-1,-1]
16
17};