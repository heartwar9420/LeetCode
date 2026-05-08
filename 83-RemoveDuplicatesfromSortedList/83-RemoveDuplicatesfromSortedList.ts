// Last updated: 2026/5/8 下午5:14:34
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
14    let dummy = new ListNode(-101,head)
15    let p = dummy
16    while(p&&p.next){
17        if(p.val===p.next.val){
18            p.next = p.next.next
19        }else{
20            p = p.next
21        }
22    }
23    return dummy.next
24};