// Last updated: 2026/5/8 下午4:03:48
1function longestPalindrome(s: string): string {
2    const getPalindrome = (s:string ,l:number,r:number)=>{
3        while (s[l]===s[r] && l>=0 && r<s.length){
4            l--
5            r++
6        }
7        return s.substring(l+1 , r);
8    }
9    let res = ''
10    for (let i = 0 ; i<s.length ; i++){
11        let s1 = getPalindrome(s,i,i)
12        let s2 = getPalindrome(s,i,i+1)
13        res = res.length > s1.length ? res : s1
14        res = res.length > s2.length ? res : s2
15    }
16    return res
17};