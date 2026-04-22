// Last updated: 2026/4/22 上午9:33:38
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
13function detectCycle(head: ListNode | null): ListNode | null {
14    let slow = head
15    let fast = head
16    while (fast!==null && fast.next !== null){
17        slow = slow.next
18        fast = fast.next.next
19        if(fast === slow){
20            let p = head
21            while (p!==slow){
22                p = p.next
23                slow = slow.next
24                }
25                return p
26            }
27    }
28    return null
29};