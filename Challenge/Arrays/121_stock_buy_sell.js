// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

var maxProfit = function(prices) {
   let minVal = prices[0]
   let profit = 0
   for(let i=1;i<prices.length;i++){
        // let cost = prices[i]-minVal
        profit= Math.max(profit, prices[i]-minVal)
        minVal= Math.min(minVal, prices[i])
   }
   return profit
};

console.log(maxProfit([7,1,5,3,6,4]))