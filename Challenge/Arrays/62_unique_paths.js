// https://leetcode.com/problems/unique-paths/

// dp but tc and sc - O(n*m).
var recursion = function(i,j,m,n, c,dp){
    
    if(i==m-1 && j==n-1){
        c+=1
        return c
    }
    if(i>=m || j>=n ){
        return 0
    }
    if(dp[i][j]!=-1) return dp[i][j]
    return dp[i][j] = recursion(i+1,j,m,n, c, dp) + recursion(i,j+1, m,n, c, dp)
}


var uniquePaths1 = function(m, n) {
    let dp = new Array(m);
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n).fill(-1);
    }
    return recursion(0,0,m,n,0,dp)
};

 console.log(uniquePaths1(2,3)) // 3

// other

// 2* 3 matrix - RRD, DRR,RDR - so, M-1 DIRECTIONS+ N-1 DIECTIONS => M+N-2


const factarial = (n) => {
    if(n>1){return n*factarial(n-1)}
    else return 1;
  };

var uniquePaths2 = function(m, n) {
    let n1 = m+n-2
    let r1 = m-1
    let res = 1
   res= factarial(n1)/factarial(n1-r1)*factarial(r1) // CHECK AGAIN 
    return res
};

// optimised - (m+n-2) C (m-1)
//TC - O(n-1) or  O(m-1)
//SC -O(1)


var uniquePaths = function(m, n) {
    const N = n + m - 2;
        const r = m - 1;
        let res = 1;

        for (let i = 1; i <= r; i++) {
            res = (res * (N - r + i)) / i;
        }

        return Math.floor(res);
};

//console.log(uniquePaths(2,3))