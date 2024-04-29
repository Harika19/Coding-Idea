//value = 10, coins[] = {2, 5, 3, 6}

function findCombinations(coins, value){
    const result =[];
    function backTrackCoins(start, combination, remainingAmount){
        if(remainingAmount==0){
            result.push([...combination]);
        }
        if(remainingAmount<0){
            return;
        }

        for(let i=start;i<coins.length;i++){
            combination.push(coins[i]);
            backTrackCoins(i,combination, remainingAmount-coins[i]);
            combination.pop();
        }
    }

    backTrackCoins(0, [], value);
    return result;
}

const coins= [2, 5, 3, 6];
const value = 20;
const allCombinations = findCombinations(coins, value);
console.log("All possible combinations:", allCombinations);