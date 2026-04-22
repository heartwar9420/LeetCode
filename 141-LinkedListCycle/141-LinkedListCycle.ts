// Last updated: 2026/4/22 上午9:27:00
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
14    if (head === null || head.next === null) return false
15    let fast = head
16    let slow = head
17    while (fast!==null && fast.next !== null){
18        fast = fast.next.next
19        slow = slow.next
20        if(fast === slow) return true
21    }
22    return false
23};