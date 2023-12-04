// https://leetcode.com/problems/longest-common-subsequence/submissions/
// Time Complexity: O(N*M)
// Space Complexity: O(N*M) + O(N+M)



/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */


var Subsequence = function (text1, text2, dp) {
    function mainLogic(ind1, ind2) {
        if (ind1 < 0 || ind2 < 0) return 0
        if (dp[ind1][ind2] !== -1) return dp[ind1][ind2]
        if (text1[ind1] == text2[ind2]) {
            return (dp[ind1][ind2] = 1 + mainLogic(ind1 - 1, ind2 - 1));
        } else {
            return (dp[ind1][ind2] = Math.max(mainLogic(ind1, ind2 - 1), mainLogic(ind1 - 1, ind2)));
        }
    }
    
    return mainLogic(text1.length - 1, text2.length - 1);
}

var longestCommonSubsequence = function (text1, text2) {
    let dp = Array(text1.length).fill().map(() => Array(text2.length).fill(-1));
    return Subsequence(text1, text2, dp)
};

console.log(longestCommonSubsequence("abcde", "ace"))