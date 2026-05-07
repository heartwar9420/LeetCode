// Last updated: 2026/5/7 上午10:20:56
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
14    if (lists.length===0) return null
15
16    let dummy = new ListNode(-1)
17    let p = dummy
18
19    let pq = new PriorityQueue<ListNode | null>((a,b)=>a.val - b.val)
20
21    for (let i = 0 ; i <lists.length ; i++){
22        if (lists[i]){
23            pq.enqueue(lists[i])
24        }
25    }
26    while (!pq.isEmpty()){
27        let cur = pq.dequeue()
28        p.next = cur;
29        if (cur.next){
30            pq.enqueue(cur.next)
31        }
32        p = p.next
33    }
34    return dummy.next
35
36
37    
38};
39