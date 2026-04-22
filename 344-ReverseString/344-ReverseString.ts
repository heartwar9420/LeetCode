// Last updated: 2026/4/22 上午11:16:16
1/**
2 Do not return anything, modify s in-place instead.
3 */
4function reverseString(s: string[]): void {
5    let left = 0
6    let right = s.length -1
7    while (left<right){
8        let temp = s[right]
9        s[right] = s[left]
10        s[left] = temp
11        left ++
12        right --
13    }
14
15};