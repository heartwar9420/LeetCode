// Last updated: 2026/5/10 上午10:55:55
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
13function deleteDuplicates(head: ListNode | null): ListNode | null {
14    let dummy = new ListNode(-1)
15    let p = dummy , q =head
16    while(q){
17        if(q.next && q.val === q.next.val){
18            while (q.next && q.val === q.next.val){
19                q=q.next
20            }
21            q = q.next
22            if(q === null){
23                p.next = null
24            }
25        }else{
26            p.next = q
27            q = q.next
28            p = p.next
29        }
30    }
31    return dummy.next
32};