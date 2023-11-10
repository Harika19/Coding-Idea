// https://leetcode.com/problems/coin-change/description/ 
// https://www.youtube.com/watch?v=H9bfqozjoqs&t=1143s


// bottom up approach - memo -> find min coins required for all coins from 0 to amount . dp[0], dp[1],.... dp[11]

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    
    let dp = Array(amount+1).fill(Number. MAX_VALUE);

    dp[0]=0
    for(let a=1;a<=amount; a++){
        for(let c of coins){
            if(a-c>=0){
                dp[a] = Math.min(dp[a], 1+ dp[a-c]);
            }
        }
    }
    return dp[amount] === (Number. MAX_VALUE) ? -1: dp[amount];
};

// Input: coins = [1,2,5], amount = 11
// Output: 3
// Explanation: 11 = 5 + 5 + 1