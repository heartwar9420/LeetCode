// Last updated: 2026/5/9 下午1:27:26
1function twoSum(numbers: number[], target: number): number[] {
2    let lo = 0
3    let hi = numbers.length-1
4    while(lo<hi){
5        let sum = numbers[lo]+numbers[hi]
6        if(sum<target){
7            lo++
8        }else if (sum>target){
9            hi--
10        }else{
11            return [lo+1,hi+1]
12        }
13    }
14    return null
15};