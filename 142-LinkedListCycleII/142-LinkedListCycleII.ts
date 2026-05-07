// Last updated: 2026/5/7 上午11:36:30
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
14    let slow = head , fast = head
15    while (fast&&fast.next){
16        slow = slow.next
17        fast = fast.next.next
18        if (fast===slow){
19            break
20        }
21    }
22    if (!fast || !fast.next) return null
23    let cur = head
24    while (cur !== fast){
25        cur = cur.next
26        fast = fast.next
27    }
28    return cur
29};