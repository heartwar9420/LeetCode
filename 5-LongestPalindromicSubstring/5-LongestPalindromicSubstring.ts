// Last updated: 2026/5/9 上午9:46:45
1function longestPalindrome(s: string): string {
2    if (s.length <= 1) return s;
3
4    // 1. 預處理字串：aba -> #a#b#a#
5    let t = "#" + s.split("").join("#") + "#";
6    const n = t.length;
7    
8    // p[i] 紀錄以 i 為中心向外擴散的半徑（包含中心點自己）
9    const p = new Array(n).fill(0);
10    
11    let center = 0; // 目前最右邊界迴文的中心
12    let right = 0;  // 目前最右邊界迴文的右邊界
13    
14    let maxLen = 0;
15    let centerIndex = 0;
16
17    for (let i = 0; i < n; i++) {
18        // --- 核心優化：利用對稱性 ---
19        if (i < right) {
20            let mirror = 2 * center - i; // i 關於 center 的對稱點
21            // 點睛之筆：取「鏡子長度」與「到邊界距離」的最小值
22            p[i] = Math.min(right - i, p[mirror]);
23        }
24
25        // --- 嘗試繼續往外擴散（在對稱性的基礎上繼續試探） ---
26        let l = i - (p[i] + 1);
27        let r = i + (p[i] + 1);
28        while (l >= 0 && r < n && t[l] === t[r]) {
29            p[i]++;
30            l--;
31            r++;
32        }
33
34        // --- 如果擴散出的範圍超過了之前的最右邊界，就更新中心 ---
35        if (i + p[i] > right) {
36            center = i;
37            right = i + p[i];
38        }
39
40        // 紀錄最長半徑的位置
41        if (p[i] > maxLen) {
42            maxLen = p[i];
43            centerIndex = i;
44        }
45    }
46
47    // 3. 從預處理過的字串切出結果，並拿掉 #
48    let start = (centerIndex - maxLen) / 2;
49    return s.substring(start, start + maxLen);
50}