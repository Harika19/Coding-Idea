// https://leetcode.com/problems/linked-list-cycle-ii/

var detectCycle = function(head) {
    let slow = head, fast = head
    let isCycle = false
    while(fast && fast.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            isCycle = true
            break
        }
    }
    let curr = head
    if(isCycle){
        while(curr !== fast){
             fast = fast.next
             curr = curr.next
        }
        return curr
    }else{
        return null
    }
};