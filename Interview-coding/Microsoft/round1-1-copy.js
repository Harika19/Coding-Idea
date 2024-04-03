

// var maxProfit = function(prices){
//     // let minVal = arr[0];
//     // let profit =0;
//     // for(let i=1;i<arr.length;i++){
//     //     profit= Math.max(profit, arr[i]-minVal);
//     //     minVal= Math.min(minVal, arr[i]);
//     // }
//     // return profit;

//     let hold = -prices[0];
//     let coolDown = 0;
//     let noStock = 0;
//     let transaction = [];

//     for(let i=1;i<prices.length;i++){
//         let prevHold = hold;
//         hold = Math.max(hold, noStock-prices[i]);
//         if(hold==noStock-prices[i]){
//             transaction.push({buyDay: i});
//         }
//         noStock = Math.max(noStock, coolDown);
//         coolDown = prevHold+prices[i];
//         if(coolDown==prevHold+prices[i]){
//             transaction[transaction.length-1].sellDay= i;
//         }
        
//     }
//     let profit = Math.max(coolDown, noStock);
//     transaction.forEach(t=>{
//         console.log("bought day:", t.buyDay)
//         if(t.sellDay!== undefined){
//             console.log("sold on day", t.sellDay)
//         }
//     });
//     return  profit;
// }

var maxProfit = function(prices){
    let hold = -prices[0];
    let coolDown = 0;
    let noStock = 0;

    for (let i = 1; i < prices.length; i++) {
        let prevHold = hold;
        hold = Math.max(hold, noStock - prices[i]);

        noStock = Math.max(noStock, coolDown);
        coolDown = prevHold + prices[i];
    }

    return Math.max(coolDown, noStock);
}

console.log(maxProfit([100, 180, 260, 310, 40, 535, 695]));



console.log(maxProfit([4, 2, 2, 2, 4]))
console.log(maxProfit([100, 180, 260, 310, 40, 535, 695]))























/*


The cost of a stock on each day is given in an array. Find the maximum profit that you can make by buying and selling on those days. 
If the given array of prices is sorted in decreasing order, then profit cannot be earned at all.
 
 
Input: arr[] = {100, 180, 260, 310, 40, 535, 695}
Output: 865
Explanation: Buy the stock on day 0 and sell it on day 3 => 310 – 100 = 210
                       Buy the stock on day 4 and sell it on day 6 => 695 – 40 = 655
                       Maximum Profit  = 210 + 655 = 865
 
Input: arr[] = {4, 2, 2, 2, 4}
Output: 2
Explanation: Buy the stock on day 1 and sell it on day 4 => 4 – 2 = 2
                       Maximum Profit  = 2

                       */