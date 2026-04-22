// Last updated: 2026/4/22 上午9:20:32
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
13function middleNode(head: ListNode | null): ListNode | null {
14    let slow = head
15    let fast = head
16
17    while (fast!==null && fast.next!==null){
18        slow = slow.next
19        fast = fast.next.next
20    }
21    return slow
22};