// Last updated: 2026/5/10 上午11:34:35
1function longestPalindrome(s: string): string {
2    let res = ''
3    const palindrome = (s: string,l:number,r:number)=>{
4        while(l>=0 && r<s.length &&s[l]===s[r]){
5            l--
6            r++
7        }
8        return s.substring(l+1,r)
9    }
10    for (let i = 0 ; i<s.length ; i++){
11        let s1 = palindrome(s,i,i)
12        let s2 = palindrome(s,i,i+1)
13        res = res.length > s1.length ? res : s1
14        res = res.length > s2.length ? res : s2
15    }
16    return res
17};