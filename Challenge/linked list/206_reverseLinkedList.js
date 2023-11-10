// https://leetcode.com/problems/reverse-linked-list/

/*
1. take curr var and point to head
2. take prev dummy var with null
3. next = curr.next
4. change connection to prev -> curr.next = prev
5. move prev to curr and curr to next
*/

var reverseList = function(head) {
    let curr = head
    let prev = null
    while(curr!=null){
        let next = curr.next;
        curr.next = prev
        prev = curr
        curr= next
    }
    return prev
};

console.log(reverseList([1,2,3,4,5]))