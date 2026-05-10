// Last updated: 2026/5/10 下午1:59:48
function isPalindrome(s: string): boolean {
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        while (start < end && !isLetter(s[start])) {
            start++;
        }
        while (start < end && !isLetter(s[end])) {
            end--;
        }
        if ( (s[start]).toLowerCase() !== (s[end]).toLowerCase()) {
            return false;
        }
        start++;
        end--;
    }
    return true;
};

function isLetter(ch: string) {
    return /^[a-zA-Z0-9]$/.test(ch);
}