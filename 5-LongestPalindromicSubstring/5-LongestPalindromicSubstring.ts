// Last updated: 2026/5/8 下午4:06:15
1function longestPalindrome(s: string): string {
2    if (s.length < 2) return s;
3
4    let start = 0;
5    let end = 0;
6
7    // 定義輔助函式：只回傳擴散後的左右索引，不直接切字串
8    const expandFromCenter = (left: number, right: number): [number, number] => {
9        // 先檢查邊界，再檢查字元是否相等
10        while (left >= 0 && right < s.length && s[left] === s[right]) {
11            left--;
12            right++;
13        }
14        // 注意：離開迴圈時，left 和 right 已經多跳了一格，所以要還原
15        return [left + 1, right - 1];
16    };
17
18    for (let i = 0; i < s.length; i++) {
19        // 奇數擴散 (aba)
20        const [l1, r1] = expandFromCenter(i, i);
21        // 偶數擴散 (abba)
22        const [l2, r2] = expandFromCenter(i, i + 1);
23
24        // 更新最長紀錄
25        if (r1 - l1 > end - start) {
26            start = l1;
27            end = r1;
28        }
29        if (r2 - l2 > end - start) {
30            start = l2;
31            end = r2;
32        }
33    }
34
35    // 整個過程只切一次字串，效能最好
36    return s.substring(start, end + 1);
37}