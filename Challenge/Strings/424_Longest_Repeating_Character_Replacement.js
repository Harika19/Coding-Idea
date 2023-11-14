var characterReplacement = function(s, k) {
    let l=0;
    let map = new Map();
    let maxi=0
    let maxiFrequent=0
    for(let r=0;r<s.length;r++){
        map[s[r]] = (map[s[r]] || 0)+1;
        maxiFrequent = Math.max(maxiFrequent, map[s[r]])
        while((r-l+1) - maxiFrequent>k){
            map[s[l]]-=1
             l+=1
        }
        maxi = Math.max(maxi, r-l+1)
    }
    return maxi
};

console.log(characterReplacement('ABAB', 2))
