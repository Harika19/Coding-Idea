// https://leetcode.com/problems/powx-n/

// TC - O(LOG N), SC = O(1)

var myPow = function(x, n) {
    let temp = n
    let ans = 1
    if(n<0) temp= temp*-1
    while(temp){
        if(temp%2==0){
            x = (x* x) // take a look
            temp= temp/2
        }else if(temp%2 ==1){
            ans = ans * x
            temp -=1
        }
    }
    return ((n<0) ? 1/ans : ans)
};

console.log(myPow(2.00000, 4))