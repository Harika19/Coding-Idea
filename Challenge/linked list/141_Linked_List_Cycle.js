// https://leetcode.com/problems/linked-list-cycle/


var hasCycle = function(head) {
    let slow = head, fast = head
    while(fast && fast.next){
         fast = fast.next.next
         slow = slow.next
         if(fast == slow) return true
    }
    return false
    
};