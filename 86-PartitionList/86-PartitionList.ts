// Last updated: 2026/5/7 上午11:07:37
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
13function partition(head: ListNode | null, x: number): ListNode | null {
14    let bigDummy = new ListNode(-1)
15    let smallDummy = new ListNode(-1)
16    let bigP = bigDummy
17    let smallP = smallDummy
18    while(head){
19        if(head.val<x){
20            smallP.next=head
21            smallP = smallP.next
22        }else{
23            bigP.next=head
24            bigP = bigP.next
25        }
26        head = head.next
27    }
28        bigP.next = null
29        smallP.next = bigDummy.next
30        return smallDummy.next
31};