// Last updated: 2026/4/22 上午9:44:27
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
14    let p1 = headA
15    let p2 = headB
16    while (p1!==p2){
17        if(p1 === null){
18            p1 = headB
19        }else p1=p1.next
20        if(p2 === null){
21            p2 = headA
22        }else{
23            p2=p2.next
24        }
25    }
26    return p1
27};