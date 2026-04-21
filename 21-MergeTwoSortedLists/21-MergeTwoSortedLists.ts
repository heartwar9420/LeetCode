// Last updated: 2026/4/22 上午7:46:08
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
14
15    let dummy= new ListNode(-1)
16    let p = dummy || null
17    let p1 = list1
18    let p2 = list2
19
20    while(p1!==null&&p2!==null){
21        if(p1.val>p2.val){
22            p.next = p2
23            p2 = p2.next
24        }else{
25            p.next = p1
26            p1 = p1.next
27        }
28        p = p.next
29    }
30    if (p1 === null){
31        p.next = p2
32    }
33    if (p2 === null){
34        p.next = p1
35    }
36    return dummy.next
37
38};