// Last updated: 2026/5/10 下午1:53:33
1function isPalindrome(s: string): boolean {
2    let left = 0 , right = s.length-1
3    while(left<right){
4        if(!/[a-zA-Z0-9]/.test(s[left])){
5            left++
6        }else if (!/[a-zA-Z0-9]/.test(s[right])){
7            right--
8        }else{
9            if(s[left].toLowerCase()!==s[right].toLowerCase()){
10                return false
11            }
12                left++
13                right--
14        }
15    }
16    return true
17};