
// palindrome using recursion

var palindrome = function(str,i, n){
    if(i>=n/2){
        return true;
    }
    if(str[i] != str[n-i-1]){
        return false;
    }
     return palindrome(str, i+1, n)
}

var main = function(str){
    return palindrome(str,0,str.length)
}

console.log(main('mam'))