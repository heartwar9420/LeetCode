// Last updated: 2026/5/6 上午11:05:59
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
16    while (fast!==null&&fast.next!==null){
17        slow = slow?.next
18        fast = fast?.next?.next
19    }
20    return slow
21};