// Last updated: 2026/5/7 上午11:11:19
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
14    let slow = head , fast = head
15    while(fast&&fast.next){
16        fast = fast.next.next
17        slow = slow.next
18    }
19    return slow
20
21};