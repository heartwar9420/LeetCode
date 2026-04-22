// Last updated: 2026/4/22 上午8:54:55
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
14    let smallHead = new ListNode(-1)
15    let bigHead = new ListNode(-1)
16    let p1 = smallHead
17    let p2 = bigHead
18
19    while(head!==null){
20        if(head.val<x){
21            p1.next = head
22            p1 = p1.next
23        }else{
24            p2.next = head
25            p2 = p2.next
26        }
27        head = head.next
28    }
29    p2.next = null
30    p1.next = bigHead.next
31    
32    return smallHead.next
33
34};