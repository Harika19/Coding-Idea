/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr=[]
    let obj = {
         ')':'(',
         '}': '{',
         ']' : '['
    }
    for(let i of s){
        if(obj[i]){
            if(obj[i]!== arr.pop()){
                    return false;
            }
        }else{
            arr.push(i)
        }
    }
    return arr.length===0;
   
};