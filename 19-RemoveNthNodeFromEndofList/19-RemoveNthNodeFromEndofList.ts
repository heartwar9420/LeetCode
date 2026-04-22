// Last updated: 2026/4/22 上午9:16:32
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
13function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
14    let dummy = new ListNode(-1,head)
15    let fast = dummy
16    let slow = dummy
17    for(let i = 0 ; i<n ; i++){
18        fast = fast.next
19    }
20    while (fast.next !== null){
21        fast = fast.next
22        slow = slow.next
23    }
24    slow.next = slow.next.next
25    return dummy.next
26}