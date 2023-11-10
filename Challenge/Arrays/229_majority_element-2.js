// https://leetcode.com/problems/majority-element-ii/

// > n/3 times 

var majorityElement1 = function(nums) {
    let n = Math.floor(nums.length/3)
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        if(!map.get(nums[i])){
            map.set(nums[i], 1)
        }else{
            map.set(nums[i], map.get(nums[i])+1)
        }
        if(map.get(nums[i])>n){
            return nums[i]
        }
    }
};


// optimised one, sc - no extra space

var majorityElement = function(nums) {
    let n = Math.floor(nums.length/3)
    let c1=0,c2=0,e1,e2;
    for(let i=0;i<nums.length;i++){
        if(c1==0 && e2!= nums[i] ){
            c1=1
            e1=nums[i]
        }else if(c2==0 && e1!= nums[i]){
            c2=1
            e2=nums[i]
        }else if(e1==nums[i]){
            c1+=1
        }else if(e2==nums[i]){
            c2+=1
        }else{
            c1--
            c2--
        }
    }
    let c3=0,c4=0, res =[]
    for(let i=0;i<nums.length;i++){
        if(nums[i]==e1){
            c3++
        }else if(nums[i]==e2){
            c4++
        }
    }
    if(c3>n){
        res.push(e1)
    }
    if(c4>n){
        res.push(e2)
    }
    return  res
};

console.log(majorityElement([3,2,3]))