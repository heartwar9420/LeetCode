// Last updated: 2026/5/8 下午4:27:22
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
14    let p1 = l1 , p2 = l2
15    let dummy = new ListNode(-1)
16    let p = dummy
17    let carry = 0
18    while(p1||p2||carry>0){
19        let val = carry
20        if(p1){
21            val += p1.val
22            p1 = p1.next
23        }
24        if(p2){
25            val += p2.val
26            p2 = p2.next
27        }
28        carry = Math.floor(val/10)
29        val = val%10
30        p.next = new ListNode(val)
31        p = p.next
32    }
33    return dummy.next
34
35    
36};