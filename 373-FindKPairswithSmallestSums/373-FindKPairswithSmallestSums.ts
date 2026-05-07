// Last updated: 2026/5/7 上午9:21:09
1interface MealPair{
2    chefVal : number;
3    sideVal : number;
4    sideIndex: number;
5}
6
7function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
8    let pq = new PriorityQueue ((a:MealPair,b:MealPair)=>{
9        return (a.chefVal+a.sideVal)-(b.chefVal+b.sideVal)
10    })
11    for ( let i = 0 ; i < Math.min(k,nums1.length); i++){
12        pq.enqueue({
13            chefVal : nums1[i],
14            sideVal : nums2[0],
15            sideIndex : 0
16        })
17    }
18    let res = []
19    while(k>0 && !pq.isEmpty()){
20        let cur = pq.dequeue();
21        k--;
22        let nextIndex = cur.sideIndex+1;
23        if(nextIndex < nums2.length){
24            pq.enqueue({
25                chefVal:cur.chefVal,
26                sideVal:nums2[nextIndex],
27                sideIndex:nextIndex
28            })
29        }
30        res.push([cur.chefVal,cur.sideVal]);
31    }
32    return res
33};