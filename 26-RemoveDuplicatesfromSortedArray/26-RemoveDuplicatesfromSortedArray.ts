// Last updated: 2026/5/8 下午4:41:59
1function removeDuplicates(nums: number[]): number {
2    if (nums.length === 0) return 0;
3    
4    let slow = 0;
5    // fast 從 1 開始探路，因為索引 0 預設就是第一個不重複的數字
6    for (let fast = 1; fast < nums.length; fast++) {
7        if (nums[slow] !== nums[fast]) {
8            slow++;
9            nums[slow] = nums[fast];
10        }
11    }
12    return slow + 1;
13}