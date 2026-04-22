// Last updated: 2026/4/22 上午11:50:24
1function twoSum(numbers: number[], target: number): number[] {
2    let left = 0, right = numbers.length - 1
3    while (left < right) {
4        let sum = numbers[left] + numbers[right]
5        if (sum === target) {
6            return [left + 1, right + 1]
7        } else if (sum < target) {
8            left++
9            
10        } else if (sum > target) {
11            right--
12        }
13    }
14    return null
15
16
17};