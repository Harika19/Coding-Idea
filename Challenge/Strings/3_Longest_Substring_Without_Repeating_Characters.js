var lengthOfLongestSubstring = function(s) {
    let map = new Map()
    let l=0,c=0,r=0;
    let n=s.length
    while(r<n){
        if(map.has(s.charAt(r))){
            l = Math.max(l, map.get(s.charAt(r))+1);
        }
        c=Math.max(c, r-l+1);
        map.set(s.charAt(r), r);
        r++;
    }
    return c
};

console.log(lengthOfLongestSubstring('abcabcbb'))
