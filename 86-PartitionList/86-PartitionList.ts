// Last updated: 2026/5/6 上午9:50:32
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
14    let smallList = new ListNode(-1)
15    let bigList = new ListNode(-1)
16    let sp = smallList
17    let bp = bigList
18
19    while (head!==null){
20        if(head.val<x){
21            sp.next = head
22            sp = sp.next
23        }else{
24            bp.next = head
25            bp = bp.next
26        }
27        head = head.next
28    }
29
30    bp.next=null
31    sp.next = bigList.next
32    
33    return smallList.next
34};