// Last updated: 2026/5/7 下午4:01:09
1/**
2 * Definition for singly-linked list.
3 * class ListNode {
4 *     val: number
5 *     next: ListNode | null
6 *     constructor(val?: number, next?: ListNode | null) {
7 *         this.val = (val===undefined ? 0 : val)
8 *         this.next = (next===undefined ? null : next)
9 *     }
10 * }
11 */
12
13function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
14    let dummy = new ListNode(-1)
15    let p = dummy, p1 = l1, p2 = l2
16    let carry = 0
17    while(p1||p2 || carry!==0){
18        let val = carry
19        if(p1){
20            val += p1.val
21            p1 = p1.next
22        }
23        if(p2){
24            val += p2.val
25            p2 = p2.next
26        }
27        carry = Math.floor(val/10);
28        val = val%10
29        let cur = new ListNode(val);
30        p.next = cur
31        p = p.next
32    }
33    return dummy.next
34    
35};