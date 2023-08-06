
function getMaxScore(nums) {
  nums.sort((a, b) => b - a);
  let prefix = [];
  let sum = 0;
  for (let num of nums) {
    sum += num;
    prefix.push(sum);
  }
  let maxScore = 0;
  for (let num of prefix) {
    if (num > 0) {
      maxScore++;
    } else {
      break;
    }
  }

  return maxScore;
}

// Test cases
// console.log(getMaxScore([2,-1,0, 1, -3, 3, -3])); // Output: 6
// console.log(getMaxScore([-2, -3, 0]));    // Output: 0




// function getMaxScore(nums) {
//   // Sort the array in non-increasing order
//   nums.sort((a, b) => b - a);

//   // Calculate the prefix sums
//   let prefix = [];
//   let sum = 0;
//   for (let num of nums) {
//     sum += num;
//     prefix.push(sum);
//   }

//   // Count the number of positive integers in the prefix sums array
//   let maxScore = 0;
//   for (let num of prefix) {
//     if (num > 0) {
//       maxScore++;
//     } else {
//       // Since the array is sorted in non-increasing order, as soon as a non-positive
//       // prefix sum is encountered, we can break the loop because all subsequent prefix sums will also be non-positive.
//       break;
//     }
//   }

//   return maxScore;
// }

// // Test cases
// console.log(getMaxScore([2, 10, 1, -3, 3])); // Output: 6
// console.log(getMaxScore([1, -2, 3, 0]));    // Output: 0





function solve(N, M, F, B) {
  let minCost = Infinity;

  for (let i = 0; i < N; i++) {
    let frontEndCost = F[i];

    // Find the minimum cost among all back-end developer candidates
    let backEndMinCost = Infinity;
    for (let j = 0; j < M; j++) {
      backEndMinCost = Math.min(backEndMinCost, B[j]);
    }

    // Calculate the total cost for this combination of front-end and back-end developer candidates
    let totalCost = frontEndCost + backEndMinCost;

    // Update minCost if the current combination's cost is lower
    minCost = Math.min(minCost, totalCost);
  }

  return minCost;
}

// Example Test Cases
let testCases = [
  { N: 1, M: 2, F: [2], B: [1, 12] },
  { N: 2, M: 1, F: [1, 2], B: [111] },
];

for (let testCase of testCases) {
  console.log(solve(testCase.N, testCase.M, testCase.F, testCase.B));
}
