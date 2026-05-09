// Last updated: 2026/5/9 上午10:22:08
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
13function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
14    let dummy = new ListNode(-1)
15    let p = dummy
16    let carry = 0
17    while(l1||l2||carry>0){
18        let val = carry
19        if(l1){
20            val += l1.val
21            l1 = l1.next
22        }
23        if(l2){
24            val += l2.val
25            l2 = l2.next
26        }
27        carry = Math.floor(val/10)
28        val = val%10
29        p.next = new ListNode(val)
30        p = p.next
31    }
32    return dummy.next
33};