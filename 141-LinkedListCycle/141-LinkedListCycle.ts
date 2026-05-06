// Last updated: 2026/5/6 上午11:15:49
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
13function hasCycle(head: ListNode | null): boolean {
14    let slow = head , fast = head
15    while (fast!==null && fast.next!==null){
16        fast = fast.next.next
17        slow = slow.next
18        if(fast===slow){
19            return true
20        }
21    }
22    return false
23};