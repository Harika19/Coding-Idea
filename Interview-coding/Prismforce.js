// let nums = [100, 4, 200, 101, 2, 1, 102, 3], output =4

let max_consequtive_ele = function(nums){
    if(nums.length==0) return 0;
    let set = new Set();
    for(let i=0;i<nums.length;i++){
        set.add(nums[i]);
    }
    let maxi =1;

    for(let i=0;i<nums.length;i++){
        if(!set.has(nums[i]-1)){
            let c =1;
            while(set.has(nums[i]+1)){
                c+=1;
                nums[i]+=1;
            }
            maxi= Math.max(maxi, c);
        }
    }
    return maxi;
}

console.log(max_consequtive_ele([100, 4, 200, 101, 2, 1, 102, 3])) 
console.log(max_consequtive_ele([100, 7, 200, 101, 2, 1, 102, 3])) 
console.log(max_consequtive_ele([1])) 
console.log(max_consequtive_ele([51, 53, 54, 55])) 


/* questions on db query performance optimization - lots of data in db , query is taking long time to repond back.
*   sharding
*   indexing
*   partitioning
*   views - visuvalization of tables with filtered/selected coloums
* denormalization
*/