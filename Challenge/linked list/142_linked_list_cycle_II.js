// https://leetcode.com/problems/linked-list-cycle-ii/

var detectCycle = function(head) {
    let slow = head, fast = head
    let isCycle = false
    while( fast && fast.next && fast.next.next){
        slow = slow.next
        fast = fast.next.next
        if(slow === fast){
            isCycle = true
            break
        }
    }
    slow = head
    if(isCycle){
        while(slow !== fast){
             fast = fast.next
             slow = slow.next
        }
        return slow
    }else{
        return null
    }
};