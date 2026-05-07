// Last updated: 2026/5/7 上午11:36:08
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
14    if (head===null || head.next === null) return null
15    let slow = head , fast = head
16    while (fast&&fast.next){
17        slow = slow.next
18        fast = fast.next.next
19        if (fast===slow){
20            break
21        }
22    }
23    if (fast===null || fast.next === null) return null
24    let cur = head
25    while (cur !== fast){
26        cur = cur.next
27        fast = fast.next
28    }
29    return cur
30};