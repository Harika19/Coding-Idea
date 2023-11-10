//kadane algo -> maxSubarraySum -> TC: O(N)
//Brute force -> TC O(N2)

var maxSubarraySum = function (arr, N) {
    let sum = 0, maxs = arr[0];
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        maxs = Math.max(sum, maxs);
        if (sum < 0) {
            sum = 0;
        }
    }
    return maxs;
}

console.log(maxSubarraySum([1, 2, 3, -2, 5], 5))

