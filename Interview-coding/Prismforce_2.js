function maxProfit(prices, k) {
    
    let profit = [];
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            profit.push(prices[i] - prices[i - 1]);
        }
    }
    profit.sort((a, b) => b - a);

    let maxProfit = 0;
    for (let i = 0; i < Math.min(k, profit.length); i++) {
        maxProfit += profit[i];
    }
    
    return maxProfit;
}


const k = 2;
const prices = [3, 2, 6, 5, 0, 3];
console.log(maxProfit(prices, k)); // 7
