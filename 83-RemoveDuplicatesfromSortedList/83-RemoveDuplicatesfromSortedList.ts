// Last updated: 2026/5/7 下午12:13:25
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
14    let p = head
15    while (p&&p.next){
16        if(p.val===p.next.val){
17            p.next = p.next.next
18        }else{
19            p = p.next
20        }
21    }
22    return head
23};