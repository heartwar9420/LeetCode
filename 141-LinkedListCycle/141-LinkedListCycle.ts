// Last updated: 2026/4/22 上午9:27:08
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
14    let fast = head
15    let slow = head
16    while (fast!==null && fast.next !== null){
17        fast = fast.next.next
18        slow = slow.next
19        if(fast === slow) return true
20    }
21    return false
22};