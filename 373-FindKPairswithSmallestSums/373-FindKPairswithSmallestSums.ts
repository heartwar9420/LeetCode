// Last updated: 2026/5/7 下午3:39:56
1interface MealPair{
2    chefVal:number;
3    sideVal:number;
4    sideIndex:number;
5}
6function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
7    let pq = new PriorityQueue((a:MealPair,b:MealPair)=>{
8        return (a.chefVal+a.sideVal)-(b.chefVal+b.sideVal)
9    })
10    for (let i = 0 ; i < Math.min(k , nums1.length) ; i++){
11        pq.enqueue({
12            chefVal:nums1[i],
13            sideVal:nums2[0],
14            sideIndex:0
15        })
16    }
17    let res = []
18    while (k>0 && !pq.isEmpty()){
19        let cur = pq.dequeue()
20        let nextIndex = cur.sideIndex +1
21        if(nextIndex<nums2.length){
22            pq.enqueue({
23                chefVal : cur.chefVal,
24                sideVal : nums2[nextIndex],
25                sideIndex : nextIndex
26            })
27        }
28        res.push([cur.chefVal,cur.sideVal])
29        k--
30    }
31    return res
32};