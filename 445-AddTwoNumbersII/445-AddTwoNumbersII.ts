// Last updated: 2026/5/7 下午4:22:47
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
14    let stack1 = [] , stack2 = []
15    let cur1 = l1 , cur2 = l2
16    while(cur1){
17        stack1.push(cur1.val)
18        cur1 = cur1.next
19    }
20    while(cur2){
21        stack2.push(cur2.val)
22        cur2 = cur2.next
23    }
24    let carry = 0
25    let ans = null
26    while(stack1.length!==0||stack2.length!==0||carry){
27        let p1 = stack1.pop()
28        if(!p1){
29            p1 = 0
30        }
31        let p2 = stack2.pop()
32        if(!p2){
33            p2 = 0
34        }
35        let val = carry
36        val = carry+p1+p2
37        carry = Math.floor(val/10);
38        val = val%10
39        let current = new ListNode(val);
40        current.next = ans
41        ans = current
42    }
43    return ans
44};