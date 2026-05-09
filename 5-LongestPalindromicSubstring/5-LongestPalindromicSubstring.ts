// Last updated: 2026/5/9 上午9:57:39
1function longestPalindrome(s: string): string {
2    if(s.length<1) return ''
3    let end = 0
4    let start = 0
5    const expand = (l:number,r:number)=>{
6        while(l>=0 && r < s.length && s[l]===s[r]){
7            l--
8            r++
9        }
10        return r-l-1
11    }
12    for (let i =0 ;i<s.length ; i++){
13        const len1 = expand(i,i)
14        const len2 = expand(i,i+1)
15        const maxLen = Math.max(len1,len2)
16        if(maxLen > end-start){
17            end =  i + Math.floor((maxLen)/2)
18            start = i - Math.floor((maxLen-1)/2)
19        }
20    }
21    return s.substring(start,end+1)
22};