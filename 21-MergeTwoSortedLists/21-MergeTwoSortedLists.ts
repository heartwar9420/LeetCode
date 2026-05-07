// Last updated: 2026/5/7 上午10:00:09
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
13function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
14    let l1 = list1 , l2 = list2
15    let dummy = new ListNode(-1)
16    let p = dummy
17    while (l1&&l2){
18        if(l1.val < l2.val){
19            p.next = l1
20            l1 = l1.next
21        }else{
22            p.next = l2
23            l2 = l2.next
24        }
25        p = p.next
26    }
27    if (l1 === null){
28        p.next = l2
29    }
30    if (l2 === null){
31        p.next = l1
32    }
33    return dummy.next
34};