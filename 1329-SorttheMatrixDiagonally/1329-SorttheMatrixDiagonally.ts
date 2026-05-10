// Last updated: 2026/5/10 下午3:15:48
1function diagonalSort(mat: number[][]): number[][] {
2    let m = mat.length , n = mat[0].length
3    let diagonals = new Map()
4    for (let i = 0 ; i<m ; i++){
5        for (let j=0; j<n ; j++){
6            let diagonalID = i-j
7            if(!diagonals.has(diagonalID)){
8                diagonals.set(diagonalID,[])
9            }
10            diagonals.get(diagonalID).push(mat[i][j])
11        }
12    }
13    for (let diagonal of diagonals.values()){
14        diagonal.sort((a,b)=>b-a)
15    }
16    for (let i = 0 ; i < m ; i++){
17        for (let j = 0 ; j<n ; j++){
18            let diagonal = diagonals.get(i-j)
19            mat[i][j] = diagonal.pop()
20        }
21    }
22    return mat
23};