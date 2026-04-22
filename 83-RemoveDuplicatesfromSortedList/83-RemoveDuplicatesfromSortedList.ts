// Last updated: 2026/4/22 上午10:16:39
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
14    if(!head) return null
15    let current = head
16    while (current!==null && current.next!==null){
17        if (current.val === current.next.val){
18            current.next = current.next.next
19        }else{
20            current = current.next
21        }
22    }
23    return head
24};