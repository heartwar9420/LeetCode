// Last updated: 2026/5/6 上午9:34:48
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
14    let dummy = new ListNode(-1) , p = dummy;
15    let p1 = list1 , p2 = list2
16
17    while(p1 !==null && p2 !==null){
18        if(p1.val > p2.val){
19            p.next = p2
20            p2 = p2.next
21        }else{
22            p.next = p1
23            p1 = p1.next
24        }
25        p = p.next
26    }
27    if (p1 !== null){
28        p.next = p1
29    }
30    if(p2 !== null){
31        p.next = p2
32    }
33
34    return dummy.next
35
36};