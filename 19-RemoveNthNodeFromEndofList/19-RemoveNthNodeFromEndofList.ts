// Last updated: 2026/5/6 上午10:29:13
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
13function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
14    let dummy = new ListNode(-1,head)
15    let p1 :ListNode|null = dummy
16    let p2 :ListNode|null = dummy
17
18    for (let i = 0 ; i <= n ; i++){
19        p1= p1.next
20    }
21    while (p1!==null){
22        p1=p1.next
23        p2=p2!.next
24    }
25    p2!.next = p2!.next!.next
26
27    return dummy.next
28}