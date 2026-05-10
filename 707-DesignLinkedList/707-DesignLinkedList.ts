// Last updated: 2026/5/10 下午4:58:46
1class Node{
2    val:number;
3    next:Node|null=null
4    prev:Node|null = null
5    constructor(val:number){
6        this.val = val
7    }
8}
9class MyLinkedList {
10    private head : Node
11    private tail : Node
12    private size : number
13    constructor() {
14        this.head = new Node(-1)
15        this.tail = new Node(-1)
16        this.head.next = this.tail
17        this.tail.prev = this.head
18        this.size = 0
19    }
20    private getNode(index:number):Node{
21        let curr = this.head.next
22        for (let i = 0 ; i<index ; i++){
23            curr = curr.next
24        }
25        return curr
26    }
27
28    get(index: number): number {
29        if(index<0 || index>=this.size)return -1
30        return this.getNode(index).val
31    }
32
33    addAtHead(val: number): void {
34        this.addAtIndex(0,val)
35    }
36
37    addAtTail(val: number): void {
38        this.addAtIndex(this.size,val)
39    }
40
41    addAtIndex(index: number, val: number): void {
42        if(index > this.size) return
43        if(index<0) index = 0;
44        let succ = (index === this.size) ? this.tail : this.getNode(index);
45        let pred = succ.prev
46        
47        const newNode = new Node(val);
48        newNode.prev = pred
49        newNode.next = succ
50        pred.next = newNode
51        succ.prev = newNode
52
53        this.size++
54    }
55
56    deleteAtIndex(index: number): void {
57        if(index<0 || index>=this.size) return
58        let curr = this.getNode(index)
59        let pred = curr.prev
60        let succ = curr.next
61        pred.next = succ
62        succ.prev = pred
63        
64        this.size--
65    }
66}
67
68/**
69 * Your MyLinkedList object will be instantiated and called as such:
70 * var obj = new MyLinkedList()
71 * var param_1 = obj.get(index)
72 * obj.addAtHead(val)
73 * obj.addAtTail(val)
74 * obj.addAtIndex(index,val)
75 * obj.deleteAtIndex(index)
76 */