// https://www.youtube.com/watch?v=ZJUGtWObroc&t=744s

// https://leetcode.com/problems/longest-palindromic-substring/description/

// TC - O(N2), SC - O(1)

var longestPalindrome = function(s) {
    if(s.length <= 1) return s;
        let max_len = 1;
        let n = s.length;
        let st = 0, end = 0;
        
        // Odd length
        for(let i = 0; i < n-1; ++i){
            let l = i, r = i;
            while(l >= 0 && r < n){
                if(s.charAt(l) == s.charAt(r)){
                    l--; r++;
                }else
                    break;
            }
            let len = r-l-1;
            if(len > max_len){
                max_len = len;
                st = l+1;
                end = r-1;
            }
        }
        
        // Even length
        for(let i = 0; i < n-1; ++i){
            let l = i, r = i+1;
            while(l >= 0 && r < n){
                if(s.charAt(l) == s.charAt(r)){
                    l--; r++;
                }else
                    break;
            }
            let len = r-l-1;
            if(len > max_len){
                max_len = len;
                st = l+1;
                end = r-1;
            }
        }
        
        return s.slice(st, end + 1);

};

console.log(longestPalindrome('babad'))