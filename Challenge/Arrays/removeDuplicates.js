// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 

// optimised - 2 pointer
// tc - o(n) , sc - o(1)

var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0;
    
    for (let j = 1; j < nums.length; j++) {
        console.log('000',nums,i,j)
        if (nums[j] !== nums[i]) {
            console.log('1111',i, j, nums[i], nums[j])
            i++;
            nums[i] = nums[j];
            console.log('mnnnn', nums, i, j, nums[i], nums[j])
        }
    }
    
    return i + 1;
};

//console.log(removeDuplicates([12,1,1,1,2,2]))


// other approach 

var removeDuplicates1 = function(nums) {
    for(let i=0;i<nums.length;){
      if(nums[i] ===nums[i+1]){
          nums.splice(i,1)
      }else{
          i++
      }
  }
  return nums
 };

console.log(removeDuplicates1([1,1,2]))