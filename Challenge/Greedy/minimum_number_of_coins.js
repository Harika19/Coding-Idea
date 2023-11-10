// https://takeuforward.org/data-structure/find-minimum-number-of-coins/

// tc - O(T) // worst case as we many use all 1 /-

let minCoins = function(coins, T,n){
    let res = []
    for(let i=n-1;i>=0;i--){
        while(T>=coins[i]){
            res.push(coins[i])
            T-=coins[i]
        }
    }
    console.log(res)

}


console.log(minCoins([1, 2, 5, 10, 20, 50, 100, 500, 1000], 49, 9))
console.log(minCoins([1, 2, 5, 10, 20, 50, 100, 500, 1000], 70, 9))
console.log(minCoins([1, 2, 5, 10, 20, 50, 100, 500, 1000], 121, 9))