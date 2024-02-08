var groupAnagrams = function(strs) {

// sort each ele in array
const sorted = strs.map(word => word.split('').sort().join(''))
// add and check in map and append accordingly 
const map ={}
for(let i=0;i<strs.length;i++){
    if(!map[sorted[i]]){
        map[sorted[i]] = [strs[i]]
    }else{
        map[sorted[i]].push(strs[i])
    }
}
return Object.values(map);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])) // [["bat"],["nat","tan"],["ate","eat","tea"]]
