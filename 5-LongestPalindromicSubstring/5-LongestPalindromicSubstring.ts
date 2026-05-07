// Last updated: 2026/5/7 下午3:13:58
1function longestPalindrome(s: string): string {
2    let res = '';
3    for (let i = 0 ; i <s.length ; i++){
4        let s1 = palindrome(s,i,i);
5        let s2 = palindrome(s,i,i+1);
6        res = res.length > s1.length ? res : s1;
7        res = res.length > s2.length ? res : s2
8    }
9    return res
10};
11
12function palindrome(s:string,l:number,r:number){
13    while(l>=0 && r<s.length && s[l]===s[r]){
14        l--
15        r++
16    }
17    return s.substring(l+1 , r)
18}