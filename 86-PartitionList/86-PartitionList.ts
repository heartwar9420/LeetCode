// Last updated: 2026/5/6 上午9:48:24
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
22            head = head.next
23            sp = sp.next
24        }else{
25            bp.next = head
26            head = head.next
27            bp = bp.next
28        }
29    }
30    if(sp!==null && bp!==null){
31        sp.next = bigList.next
32        bp.next=null
33    }
34    return smallList.next
35
36};