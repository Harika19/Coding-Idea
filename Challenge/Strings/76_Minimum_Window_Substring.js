// https://leetcode.com/problems/minimum-window-substring/description/

// tc = O(S+T)
var minWindow = function (s, t) {
    if (s.length < t.length) return '';
    let l = 0, r = 0;
    let len = Infinity
    let minwindow = ''
    let map = new Map()
    for (let i of t) {
        map.set(i, (map.get(i) || 0) + 1);
    }
    let c = map.size;
    while (r < s.length) {
        if (map.has(s[r])) {
            map.set(s[r], (map.get(s[r]) - 1))
            if (map.get(s[r]) === 0) c--;
        }
        r++;
        while (c === 0) {
            if (r - l < len) {
                len = r - l;
                minwindow = s.slice(l, r)
            }
            let left = s[l]
            if (map.has(left)) {
                map.set(left, (map.get(left) + 1))
                if (map.get(left) > 0) c++
            }
            l++;
        }


    }
    return minwindow
};

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"