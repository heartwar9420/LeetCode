// Last updated: 2026/5/8 下午4:18:44
1var addTwoNumbers = function(l1, l2) {
2    // 把链表元素转入栈中
3    let stk1 = [];
4    while (l1 !== null) {
5        stk1.push(l1.val);
6        l1 = l1.next;
7    }
8    let stk2 = [];
9    while (l2 !== null) {
10        stk2.push(l2.val);
11        l2 = l2.next;
12    }
13
14    // 接下来基本上是复用我在第 2 题的代码逻辑
15    // 注意新节点要直接插入到 dummy 后面
16
17    // 虚拟头结点（构建新链表时的常用技巧）
18    let dummy = new ListNode(-1);
19
20    // 记录进位
21    let carry = 0;
22    // 开始执行加法，两条链表走完且没有进位时才能结束循环
23    while (stk1.length > 0 || stk2.length > 0 || carry > 0) {
24        // 先加上上次的进位
25        let val = carry;
26        if (stk1.length > 0) {
27            val += stk1.pop();
28        }
29        if (stk2.length > 0) {
30            val += stk2.pop();
31        }
32        // 处理进位情况
33        carry = Math.floor(val / 10);
34        val = val % 10;
35        // 构建新节点，直接接在 dummy 后面
36        let newNode = new ListNode(val);
37        newNode.next = dummy.next;
38        dummy.next = newNode;
39    }
40    // 返回结果链表的头结点（去除虚拟头结点）
41    return dummy.next;
42};