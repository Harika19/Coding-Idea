// https://leetcode.com/problems/middle-of-the-linked-list/

var middleNode = function(head) {
    let fast = head, slow = head;
    while(fast && fast.next){
        fast = fast.next.next
        slow = slow.next
    }
    return slow
};

console.log(middleNode([1,2,3,4,5]))