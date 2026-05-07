// Last updated: 2026/5/7 下午3:24:35
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
15    let p = dummy
16    let q = head
17    while (q){
18        if(q.next && q.val === q.next.val){
19            while (q.next && q.val === q.next.val){
20                q = q.next
21            }
22            q = q.next
23            if (q === null){
24                p.next = null
25            }
26        }else{
27            p.next = q
28            q = q.next
29            p = p.next
30        }
31    }
32    return dummy.next
33};