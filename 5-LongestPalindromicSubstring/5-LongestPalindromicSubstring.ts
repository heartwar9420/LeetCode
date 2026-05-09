// Last updated: 2026/5/9 上午9:41:50
1function longestPalindrome(s: string): string {
2    if (s.length < 1) return "";
3    
4    // 用來紀錄目前找到最長迴文的起始與結束索引
5    let start = 0;
6    let end = 0;
7
8    // 輔助函式：現在它只回傳「擴散後的總長度」
9    const expand = (l: number, r: number): number => {
10        while (l >= 0 && r < s.length && s[l] === s[r]) {
11            l--;
12            r++;
13        }
14        // 回圈跳出時，l 和 r 已經多跑了一格，所以長度是 (r - 1) - (l + 1) + 1 = r - l - 1
15        return r - l - 1;
16    };
17
18    for (let i = 0; i < s.length; i++) {
19        // 取得兩種擴散方式的長度
20        const len1 = expand(i, i);     // 奇數擴散 (如 aba)
21        const len2 = expand(i, i + 1); // 偶數擴散 (如 abba)
22        const maxLen = Math.max(len1, len2);
23
24        // 如果這次找到的比之前紀錄的還要長，就更新索引
25        if (maxLen > end - start) {
26            // 這裡的數學計算是為了從中心點 i 往回推算出正確的 start 和 end
27            start = i - Math.floor((maxLen - 1) / 2);
28            end = i + Math.floor(maxLen / 2);
29        }
30    }
31
32    // 整個 function 只在這裡做一次 substring，效能最優！
33    return s.substring(start, end + 1);
34}