// Last updated: 2026/5/6 上午10:03:57
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
13function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
14    let k = lists.length
15    if (k === 0) return null
16    let interval = 1
17    while (interval<k){
18        for (let i = 0 ; i<k-interval;i += interval*2){
19            lists[i] = mergeTwoLists(lists[i],lists[i+interval])
20        }
21        interval *= 2
22    }
23    return lists[0]
24};
25
26function mergeTwoLists(list1:ListNode|null,list2 : ListNode|null):ListNode|null{
27    let dummy = new ListNode(-1)
28    let p = dummy
29    let p1 = list1
30    let p2 = list2
31
32    while (p1!==null && p2 !== null){
33        if(p1.val<p2.val){
34            p.next = p1
35            p1 = p1.next
36        }else{
37            p.next = p2
38            p2 = p2.next
39        }
40        p = p.next
41    }
42    if(p1!==null){
43        p.next = p1
44    }
45    if(p2!==null){
46        p.next = p2
47    }
48
49    return dummy.next
50}
51