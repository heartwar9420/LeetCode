// Last updated: 2026/5/9 上午9:39:40
1function longestPalindrome(s: string): string {
2    const palindrome = (s:string,l:number,r:number)=>{
3        while(l>=0&&r<s.length&&s[l]===s[r]){
4            l--
5            r++
6        }
7        return s.substring(l+1,r);
8    }
9    let res = ''
10    for(let i =0 ; i<s.length;i++){
11        let s1 = palindrome(s,i,i)
12        let s2 = palindrome(s,i,i+1)
13        res = res.length > s1.length ? res : s1
14        res = res.length > s2.length ? res : s2
15    }
16    return res
17};