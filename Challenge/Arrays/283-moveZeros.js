// https://leetcode.com/problems/move-zeroes/

var moveZeroes1 = function(nums) {
    let c=0
    nums.filter(i => {
        if(i==0){ c++ } 
    })
    let arr = nums.filter(i => i!=0)
    for(let i=0;i<c;i++){
        arr.push(0)
    }
    return arr
};

// console.log(moveZeroes1([0,1,0,3,12]))
// console.log(moveZeroes1([0,0,1]))

var moveZeroes2 = function(nums) {
    let arr = []
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=0){
            arr.push(nums[i])
        }
    }
    let temp = arr.length
    for(let i=0;i<temp;i++){
        nums[i]=arr[i]
    }
    for(let i=temp;i<nums.length;i++){
        nums[i]=0
    }
    return nums
};

// console.log(moveZeroes2([0,1,0,3,12]))
// console.log(moveZeroes2([0,0,1]))

// reduced SC
var moveZeroes3 = function(nums) {
    let index = 0;
  const length = nums.length;
  for (let i = 0; i < length; i++) {
      if (nums[i] !== 0) {
          nums[index] = nums[i];
          index++;
      }
  }
  for (let i = index; i < length; i++) {
      nums[i] = 0;
  }
  
  return nums;
};

// two pointer approach 

var moveZeroes = function(nums) {
   let low=0, high=low+1;

    while(high<=nums.length-1){
        if(nums[low]!==0){
            low++
            high++ 
        }else { // WHEN LOW IS EQUAL TO 0 
            if(nums[high]!==0){ 
                [nums[low], nums[high]]= [nums[high], nums[low]] // SWAP
                low++ 
            }
            high++    // BOTH LOW =0 AND HIGH =0     
        }
       
    }
    return nums
};


console.log(moveZeroes([0,1,0,3,12])) // [ 1, 3, 12, 0, 0 ]
console.log(moveZeroes([0,0,1]))

