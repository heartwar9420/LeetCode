// Last updated: 2026/5/7 下午2:14:56
1/**
2 Do not return anything, modify s in-place instead.
3 */
4function reverseString(s: string[]): void {
5    let left = 0 , right = s.length-1
6    while (left < right){
7        [s[left],s[right]]=[s[right],s[left]]
8        left++
9        right--
10    }
11
12};