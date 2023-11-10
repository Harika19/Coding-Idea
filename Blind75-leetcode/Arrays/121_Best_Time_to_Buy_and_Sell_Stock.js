https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// TC -> O(N*N)
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit1 = function(prices) {
    let n = prices.length;
    let max_profit = 0;
  for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
      max_profit = Math.max(max_profit,prices[j]-prices[i])
    }
  }
  return max_profit;
};



//BEST WAY TO SOLVE

//TC -> O(N)

var maxProfit = function(prices) {
    let n = prices.length;
  let max_profit=0;
  let max_value=prices[0];
for(let i =0;i<n;i++){
  max_value= Math.min(prices[i],max_value)
  max_profit= Math.max(max_profit, prices[i]-max_value)
}
  return max_profit;
};


console.log(maxProfit([7,1,5,3,6,4]))