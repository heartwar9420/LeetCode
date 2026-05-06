// Last updated: 2026/5/6 上午11:54:42
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
14    let dummy = new ListNode(-1,head)
15    let p = dummy
16    while(p.next&&p.next.next){
17        if(p.next.val===p.next.next.val){
18            let cur = p.next.val
19            while(p.next && p.next.val === cur){
20                p.next = p.next.next
21            }
22        }else{
23            p = p.next
24        }
25    }
26    return dummy.next
27};