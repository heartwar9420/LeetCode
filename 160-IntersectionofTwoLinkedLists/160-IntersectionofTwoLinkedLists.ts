// Last updated: 2026/5/7 上午11:26:59
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
13function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
14    let pa = headA
15    let pb = headB
16    while (pa!==pb){
17        pa = pa ? pa.next : headB;
18        pb===null ? pb = headA : pb = pb.next;
19    }
20    return pa
21};