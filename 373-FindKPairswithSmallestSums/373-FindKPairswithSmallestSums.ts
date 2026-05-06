// Last updated: 2026/5/6 下午5:28:17
1interface MealPair{
2    chefVal :number,
3    sideVal : number,
4    sideIndex:number,
5}
6function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
7    let pq = new PriorityQueue ((a:MealPair,b:MealPair)=>{
8        return (a.chefVal+a.sideVal)-(b.chefVal+b.sideVal)
9    })
10    for (let i =0; i<Math.min(k,nums1.length);i++){
11        pq.enqueue({
12            chefVal:nums1[i],
13            sideVal:nums2[0],
14            sideIndex:0
15        })
16    }
17    let res = []
18    while(!pq.isEmpty() && k>0){
19        let cur = pq.dequeue() as MealPair;
20        res.push([cur.chefVal,cur.sideVal])
21        k--
22        let nextIndex = cur.sideIndex+1
23        if(nextIndex<nums2.length){
24            pq.enqueue({
25                chefVal:cur.chefVal,
26                sideVal:nums2[nextIndex],
27                sideIndex:nextIndex
28            })
29        }
30    }
31    return res
32};