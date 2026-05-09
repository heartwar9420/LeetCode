// Last updated: 2026/5/9 上午10:17:01
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
15    let stack1:number[] = []
16    while(l1){
17        stack1.push(l1.val)
18        l1 = l1.next
19    }
20    let stack2:number[] = []
21    while(l2){
22        stack2.push(l2.val)
23        l2 = l2.next
24    }
25    let carry = 0
26    while(stack1.length>0 || stack2.length>0 || carry>0){
27        let val = carry;
28        if(stack1.length>0){
29            val += stack1.pop()
30        }
31        if(stack2.length>0){
32            val += stack2.pop()
33        }
34        carry = Math.floor(val/10)
35        val = val%10
36        let newNode = new ListNode(val)
37        newNode.next = dummy.next
38        dummy.next = newNode
39    }
40    return dummy.next
41};