// Last updated: 2026/5/7 上午9:44:17
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
16    let cur = head
17    while(cur){
18        if(cur.next && cur.val === cur.next.val){
19            while(cur.next && cur.val === cur.next.val){
20                cur = cur.next;
21            }
22            cur = cur.next
23            if(cur === null){
24                p.next = null
25            }
26        }else{
27            p.next = cur
28            p = p.next
29            cur = cur.next
30        }
31    }
32return dummy.next
33};