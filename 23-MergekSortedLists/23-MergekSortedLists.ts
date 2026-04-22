// Last updated: 2026/4/22 上午9:07:01
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
14    if(lists===null) return null
15    let dummy = new ListNode(-1)
16    let p = dummy
17    let pq = new PriorityQueue<ListNode>((a,b)=>a.val-b.val)
18
19    
20    for(let i = 0 ; i<lists.length ; i++){
21        if(lists[i]!==null){
22            pq.enqueue(lists[i])
23        }
24    }
25
26    while (!pq.isEmpty()){
27        let node = pq.dequeue()
28        p.next = node
29        if(node.next !== null){
30            pq.enqueue(node.next)
31        }
32        p = p.next
33    }
34    return dummy.next
35};