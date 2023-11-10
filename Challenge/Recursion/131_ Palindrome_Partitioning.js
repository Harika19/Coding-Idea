// https://leetcode.com/problems/palstartrome-partitioning/

// tc - O( (2^n) *k*(n/2) ) - O(2^n) to generate every substring and O(n/2)  to check if the substring generated is a palindrome. O(k) is for inserting the palindromes in another data structure

var partition = function(s) {
    let res =[]
    function palindrome1(t){
        return t === t.split('').reverse().join('')
    }
    function helper(s, start, temp){
        if(start===s.length){
            res.push([...temp])
            return
        }
        for(let end=start+1;end<=s.length;end++){
            let substring = s.slice(start, end)
            if(palindrome1(substring)){
                temp.push(substring)
                helper(s, end, temp)
                temp.pop()
            }
           
        }
    }
    helper(s,0,[])
    return res
};


console.log(partition("aab")) // [ [ 'a', 'a', 'b' ], [ 'aa', 'b' ] ]