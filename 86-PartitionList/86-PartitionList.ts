// Last updated: 2026/4/22 上午8:57:08
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
18    let p = head
19
20    while(p !==null){
21        if(p.val<x){
22            p1.next = p
23            p1 = p1.next
24        }else{
25            p2.next = p
26            p2 = p2.next
27        }
28        let temp = p.next
29        p.next = null
30        p = temp
31
32    }
33    p1.next = bigHead.next
34    
35    return smallHead.next
36};