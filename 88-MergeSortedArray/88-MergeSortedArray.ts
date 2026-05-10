// Last updated: 2026/5/10 下午2:25:25
1/**
2 Do not return anything, modify nums1 in-place instead.
3 */
4function merge(nums1: number[], m: number, nums2: number[], n: number): void {
5    let i = m-1 , j = n-1
6    let p = nums1.length-1
7    while (i>=0&&j>=0){
8        if(nums1[i]>nums2[j]){
9            nums1[p]=nums1[i]
10            i--
11        }else{
12            nums1[p]=nums2[j]
13            j--
14        }
15        p--
16        }
17        while(j>=0){
18            nums1[p]=nums2[j]
19            j--
20            p--
21    }
22};